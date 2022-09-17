import { Dialog, Combobox } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

const OPTIONS = [
  { name: 'Activities', url: '/activities' },
  { name: 'Articles', url: '/articles' },
  { name: 'Photos', url: '/photos' },
  { name: 'Home', url: '/' },
]

export default function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filteredOptions = query
    ? OPTIONS.filter((option) =>
        option.name.toLowerCase().includes(query.toLowerCase())
      )
    : OPTIONS

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  })

  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
    >
      <Dialog.Overlay />
      <Combobox
        nullable
        onChange={(option) => {
          if (option) {
            setOpen(false)
            router.push(option.url)
          }
        }}
        className="relative max-w-xl mx-auto border divide-y shadow-2xl bg-opacity-40 backdrop-blur-xl bg-neutral-800 border-neutral-700/50 rounded-xl divide-neutral-700/50"
        as="div"
      >
        <div className="flex items-center px-4">
          <MagnifyingGlassIcon className="w-4 h-5 text-neutral-600" />
          <Combobox.Input
            className="w-full px-4 py-3 font-normal bg-transparent text-neutral-200 placeholder-neutral-500 focus:outline-0"
            placeholder="Search..."
            onChange={(event) => {
              setQuery(event.target.value)
            }}
          />
        </div>
        <Combobox.Options
          static
          className="flex flex-col items-start w-full p-2 overflow-y-auto text-sm max-h-96"
        >
          {filteredOptions.map((option) => (
            <Combobox.Option
              key={option.name}
              value={option}
              as="button"
              className="w-full text-start"
            >
              {({ active }) => (
                <div
                  className={`px-4 py-2 overflow-hidden rounded-lg ${
                    active
                      ? 'bg-neutral-700 bg-opacity-40 backdrop-blur text-neutral-200 shadow-sm'
                      : 'text-neutral-400'
                  }`}
                >
                  {option.name}
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
        {query && filteredOptions.length === 0 && <p>No results found</p>}
      </Combobox>
    </Dialog>
  )
}
