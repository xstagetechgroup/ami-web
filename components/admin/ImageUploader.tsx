'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { Upload, X, CheckCircle2, AlertCircle, ImageIcon } from 'lucide-react'

interface ImageUploaderProps {
  value: string
  onChange: (url: string) => void
  folder?: string
  label?: string
  hint?: string
  accept?: string
  maxSizeMB?: number
  aspect?: 'video' | 'square' | 'portrait' | 'auto'
  className?: string
}

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

async function uploadWithProgress(
  file: File,
  onProgress: (pct: number) => void,
  folder?: string
): Promise<string> {
  // 1. Pede URL assinada ao servidor (payload pequeno, sem limite Vercel)
  const res = await fetch('/api/upload-url', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      folder:      folder ?? 'uploads',
      filename:    file.name,
      contentType: file.type,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as { error?: string }).error ?? 'Erro ao obter URL de upload')
  }

  const { uploadUrl, fileUrl } = await res.json() as { uploadUrl: string; fileUrl: string }

  // 2. Envia o ficheiro DIRETAMENTE para o R2 — não passa pelo Vercel
  await new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 95))
    })

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) resolve()
      else reject(new Error(`Upload falhou: ${xhr.status}`))
    })

    xhr.addEventListener('error', () => reject(new Error('Erro de rede')))
    xhr.addEventListener('abort', () => reject(new Error('Cancelado')))

    xhr.open('PUT', uploadUrl)
    xhr.setRequestHeader('Content-Type', file.type)
    xhr.send(file)
  })

  onProgress(100)
  return fileUrl
}

const aspectClasses: Record<string, string> = {
  video:    'aspect-video',
  square:   'aspect-square',
  portrait: 'aspect-[3/4]',
  auto:     'min-h-44',
}

export default function ImageUploader({
  value,
  onChange,
  folder,
  label,
  hint,
  accept = 'image/*',
  maxSizeMB = 10,
  aspect = 'auto',
  className = '',
}: ImageUploaderProps) {
  const inputRef  = useRef<HTMLInputElement>(null)
  const [progress, setProgress] = useState(0)
  const [status,   setStatus  ] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle')
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [dragging, setDragging] = useState(false)

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      setErrorMsg('Formato não suportado.')
      setStatus('error')
      return
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      setErrorMsg(`Tamanho máximo: ${maxSizeMB} MB`)
      setStatus('error')
      return
    }

    setFileName(file.name)
    setFileSize(formatBytes(file.size))
    setStatus('uploading')
    setProgress(0)
    setErrorMsg('')

    try {
      const url = await uploadWithProgress(file, setProgress, folder)
      onChange(url)
      setStatus('done')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao fazer upload')
      setStatus('error')
    }
  }, [maxSizeMB, onChange])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    e.target.value = ''
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  function handleClear(e: React.MouseEvent) {
    e.stopPropagation()
    onChange('')
    setStatus('idle')
    setProgress(0)
    setFileName('')
    setFileSize('')
    setErrorMsg('')
  }

  const aspectClass = aspectClasses[aspect] ?? aspectClasses.auto
  const hasImage    = !!value

  return (
    <div className={className}>
      {label && (
        <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">
          {label}
        </label>
      )}

      <div
        className={[
          'relative rounded-2xl border-2 transition-all duration-200 overflow-hidden cursor-pointer',
          aspectClass,
          hasImage
            ? 'border-transparent'
            : dragging
            ? 'border-primary bg-primary/5 scale-[1.01]'
            : status === 'error'
            ? 'border-error/50 bg-error-container/30'
            : 'border-dashed border-outline-variant/30 bg-surface-container-low hover:border-primary/40 hover:bg-primary/5',
        ].join(' ')}
        onClick={() => !hasImage && inputRef.current?.click()}
        onDragEnter={(e) => { e.preventDefault(); if (!hasImage) setDragging(true) }}
        onDragLeave={(e) => { e.preventDefault(); setDragging(false) }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleInputChange}
        />

        {/* ── Preview ── */}
        {hasImage && (
          <>
            <Image
              src={value}
              alt="Preview"
              fill
              className="object-cover"
              unoptimized={value.startsWith('/api/files/')}
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all group flex items-center justify-center gap-3 opacity-0 hover:opacity-100">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); inputRef.current?.click() }}
                className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-on-surface hover:bg-gray-100 transition-colors shadow"
              >
                Alterar
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="p-2 bg-white rounded-xl hover:bg-error-container transition-colors shadow"
              >
                <X className="h-4 w-4 text-error" />
              </button>
            </div>
          </>
        )}

        {/* ── Uploading ── */}
        {!hasImage && status === 'uploading' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-6 w-6 text-primary animate-bounce" />
            </div>
            <div className="w-full max-w-xs space-y-2">
              <div className="flex justify-between text-xs font-medium text-on-surface">
                <span className="truncate max-w-[160px]">{fileName}</span>
                <span className="text-primary font-bold shrink-0 ml-2">{progress}%</span>
              </div>
              <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[10px] text-on-secondary-container text-center">{fileSize}</p>
            </div>
          </div>
        )}

        {/* ── Idle / Drag ── */}
        {!hasImage && status === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className={[
              'w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200',
              dragging ? 'bg-primary/20 scale-110' : 'bg-surface-container-high',
            ].join(' ')}>
              <ImageIcon className={`h-7 w-7 transition-colors ${dragging ? 'text-primary' : 'text-on-secondary-container'}`} />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">
                {dragging ? 'Solte para carregar' : 'Arraste ou clique para selecionar'}
              </p>
              {hint && <p className="text-xs text-on-secondary-container mt-1">{hint}</p>}
              <p className="text-[10px] text-slate-400 mt-1">Máx. {maxSizeMB} MB</p>
            </div>
          </div>
        )}

        {/* ── Error ── */}
        {!hasImage && status === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-error/10 flex items-center justify-center">
              <AlertCircle className="h-7 w-7 text-error" />
            </div>
            <div>
              <p className="text-sm font-bold text-error">{errorMsg}</p>
              <button
                type="button"
                onClick={() => { setStatus('idle'); setErrorMsg('') }}
                className="text-xs text-primary underline mt-1"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        )}

        {/* ── Done (no preview URL yet) ── */}
        {!hasImage && status === 'done' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
            <p className="text-sm font-bold text-on-surface">Upload concluído</p>
          </div>
        )}
      </div>
    </div>
  )
}
