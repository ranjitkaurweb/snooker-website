import React from 'react'
import { OptimizedImage } from './OptimizedImage'

export interface MemberProfileProps {
  name: string
  role: string
  avatar: string
  contact?: {
    email?: string
    phone?: string
  }
  circular?: boolean
}

export function MemberProfile({
  name,
  role,
  avatar,
  contact,
  circular = false,
}: MemberProfileProps) {
  const imageClasses = circular ? 'rounded-full' : 'rounded-lg'
  
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6">
      <div className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 sm:mb-4 ${imageClasses} overflow-hidden`}>
        <OptimizedImage
          src={avatar}
          alt={`${name} - ${role}`}
          fill
          className={`object-cover ${imageClasses}`}
          fallbackSrc="/images/placeholders/avatar.png"
        />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-sm sm:text-base text-gray-600 mt-1">{role}</p>
      {contact && (
        <div className="text-xs sm:text-sm text-primary-600 mt-2">
          {contact.email && <p className="break-all">{contact.email}</p>}
          {contact.phone && <p>{contact.phone}</p>}
        </div>
      )}
    </div>
  )
}
