import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackFiles,
  SandpackLayout,
  SandpackPredefinedTemplate,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'

type SandpackProps = {
  template?: SandpackPredefinedTemplate
  files: SandpackFiles
}

export default function Sandpack({ template = 'react', files }: SandpackProps) {
  return (
    <SandpackProvider template={template} theme="dark" files={files}>
      <SandpackLayout className="not-prose [&>div]:!h-min">
        <SandpackCodeEditor showLineNumbers={true} showTabs={true} />
        <SandpackPreview />
        <SandpackConsole className="max-h-36" />
      </SandpackLayout>
    </SandpackProvider>
  )
}
