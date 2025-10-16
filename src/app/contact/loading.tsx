import Loading from '@/components/ui/Loading'

export default function ContactLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loading size="lg" text="Loading contact information..." />
    </div>
  )
}