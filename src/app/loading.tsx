export default function Loading() {
  return (
    <div className="min-h-[60vh] animate-pulse">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-8 w-48 rounded-full bg-white/10" />
          <div className="mx-auto mt-6 h-12 w-full max-w-2xl rounded-xl bg-white/8" />
          <div className="mx-auto mt-3 h-12 w-3/4 rounded-xl bg-white/8" />
          <div className="mx-auto mt-3 h-12 w-1/2 rounded-xl bg-white/8" />
          <div className="mx-auto mt-7 h-5 w-96 max-w-full rounded bg-white/6" />
          <div className="mx-auto mt-9 flex justify-center gap-3">
            <div className="h-14 w-44 rounded-full bg-white/10" />
            <div className="h-14 w-44 rounded-full bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  )
}
