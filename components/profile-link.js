function ProfileLink({ url, children }) {
  return (
    <a
      href={url}
      class="flex bg-light-grey rounded-full h-12 w-12 p-4 justify-center align-center transition duration-200 hover:bg-light-grey-hover"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default ProfileLink
