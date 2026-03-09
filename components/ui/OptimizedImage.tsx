'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

export interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/images/placeholders/default.png',
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  )
}
