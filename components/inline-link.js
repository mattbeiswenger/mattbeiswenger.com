function InlineLink({ url, children }) {
  return (
    <a
      class="inline-block transition duration-200 ease-in-out bg-light-grey hover:bg-light-grey-hover py-0.5 px-1 rounded-lg whitespace-no-wrap"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default InlineLink
