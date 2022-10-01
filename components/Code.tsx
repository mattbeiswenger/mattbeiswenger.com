import {
  SandpackCodeViewer,
  SandpackLayout,
  SandpackPredefinedTemplate,
  SandpackProvider,
} from '@codesandbox/sandpack-react'

type CodeProps = {
  children: string
  language: string
}

type InitialFile = '/App.js'

function getTemplateAndInitialFile(
  language: string
): [SandpackPredefinedTemplate, InitialFile] {
  switch (language) {
    case 'language-jsx':
      return ['react', '/App.js']
    case 'language-javascript':
      return ['vanilla', '/App.js']
    default:
      throw new Error(`Language ${language} not supported yet`)
  }
}

export default function Code({ children, language }: CodeProps) {
  const [template, initialFile] = getTemplateAndInitialFile(language)
  return (
    <SandpackProvider
      template={template}
      theme="dark"
      files={{
        [initialFile]: children.trim(),
      }}
    >
      <SandpackLayout className="not-prose [&>div]:!h-min">
        <SandpackCodeViewer showLineNumbers={true} />
      </SandpackLayout>
    </SandpackProvider>
  )
}
