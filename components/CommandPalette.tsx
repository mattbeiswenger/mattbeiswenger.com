import { Dialog, Combobox } from '@headlessui/react'
import { useEffect, useState } from 'react'
import {
  CalendarDaysIcon,
  CameraIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useCommandPaletteContext } from '../contexts/command-palette'

type MenuOption = {
  name: string
  url: string
  icon: (arg: boolean) => React.ReactNode
}

const iconClasses = (active: boolean) =>
  `w-4 h-4 ${active ? 'text-neutral-400' : 'text-neutral-500'}`

const OPTIONS: MenuOption[] = [
  {
    name: 'Activities',
    url: '/activities',
    icon: (active) => <CalendarDaysIcon className={iconClasses(active)} />,
  },
  {
    name: 'Articles',
    url: '/articles',
    icon: (active) => <PencilIcon className={iconClasses(active)} />,
  },
  {
    name: 'Photos',
    url: '/photos',
    icon: (active) => <CameraIcon className={iconClasses(active)} />,
  },
  {
    name: 'Home',
    url: '/',
    icon: (active) => <HomeIcon className={iconClasses(active)} />,
  },
]

export default function CommandPalette() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useCommandPaletteContext()

  const filteredOptions = query
    ? OPTIONS.filter((option) =>
        option.name.toLowerCase().includes(query.toLowerCase())
      )
    : OPTIONS

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
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
      <Dialog.Overlay className="fixed inset-0" />
      <Combobox
        nullable
        onChange={(option: MenuOption) => {
          if (option) {
            setOpen(false)
            router.push(option.url)
          }
        }}
        className={`relative max-w-xl mx-auto border divide-y shadow-2xl  bg-neutral-800 border-neutral-700/50 rounded-xl divide-neutral-700/50`}
        as="div"
      >
        <div className="flex items-center px-4">
          <MagnifyingGlassIcon className="w-4 h-5 text-neutral-500" />
          <Combobox.Input
            className="w-full px-4 py-3 font-normal bg-transparent text-neutral-200 focus:outline-0 placeholder-neutral-500"
            placeholder="Search..."
            onChange={(event) => {
              setQuery(event.target.value)
            }}
          />
        </div>
        <Combobox.Options
          static
          className="flex flex-col items-start w-full p-2 overflow-y-auto text-sm max-h-96 sm:text-base"
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
                  className={`px-4 py-2 overflow-hidden flex gap-2 text-sm items-center rounded-lg ${
                    active
                      ? 'bg-neutral-700 bg-opacity-40 text-neutral-300 shadow-sm'
                      : 'text-neutral-400'
                  }`}
                >
                  {option.icon(active)}
                  {option.name}
                </div>
              )}
            </Combobox.Option>
          ))}
          {query && filteredOptions.length === 0 && (
            <div className="px-4 py-2 text-neutral-400">No results found</div>
          )}
        </Combobox.Options>
      </Combobox>
    </Dialog>
  )
}
