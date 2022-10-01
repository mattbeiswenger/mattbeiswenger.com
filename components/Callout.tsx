type CalloutProps = {
  children: React.ReactNode
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="px-4 py-2 [&>*]:m-0 leading-6 bg-indigo-300 border-l-4 my-8 border-l-indigo-300 bg-opacity-50 text-neutral-100">
      {children}
    </div>
  )
}
