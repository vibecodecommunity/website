import React from 'react';
import { cn, type CodeBlockProps, getCodeOptions } from '@/lib/utils';

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  title,
  lineNumbers,
  wrap,
  highlightLines,
}) => {
  const options = getCodeOptions({
    lineNumbers,
    wrap,
  });

  return (
    <div className="code-block-wrapper my-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
      {title && (
        <div className="code-block-title bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-300">
          {title}
        </div>
      )}
      <pre 
        className={cn(
          "code-block astro-code",
          wrap && "whitespace-pre-wrap",
          !wrap && "overflow-x-auto"
        )}
        data-language={language}
        data-theme="auto"
        {...(highlightLines ? {"data-highlighted-lines": highlightLines} : {})}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock; 