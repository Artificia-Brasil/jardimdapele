import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'testimonial' | 'feature' | 'pricing'
  featured?: boolean
  children: React.ReactNode
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', featured = false, children, ...props }, ref) => {
    const baseClasses = 'bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden'
    
    const variants = {
      default: '',
      testimonial: 'p-8 relative',
      feature: 'p-6 text-center hover:transform hover:scale-105',
      pricing: 'p-8 relative'
    }
    
    const featuredClasses = featured ? 'ring-4 ring-primary-500 transform scale-105' : ''

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          featuredClasses,
          className
        )}
        ref={ref}
        {...props}
      >
        {featured && variant === 'pricing' && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Mais Popular
          </div>
        )}
        {variant === 'testimonial' && (
          <div className="absolute top-4 left-6 text-6xl text-primary-200 font-serif leading-none">
            "
          </div>
        )}
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card