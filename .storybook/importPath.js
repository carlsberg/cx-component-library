import { Description, DocsContext, Source } from '@storybook/addon-docs';
import React, { useContext, useEffect, useState } from 'react';

export const ImportPath = () => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const [params] = useState(story.parameters);
  const [path, setPath] = useState(params.importPath.toString());
  const [object, setObject] = useState(params.importObject.toString().replace(/\s+/g, ''));

  const updateContent = () => {
    setPath(`yarn add '${params.importPath.toString()}'`);
    setObject(
      `import { ${params.importObject
        .toString()
        .replace(/\s+/g, '')
        .replaceAll(',', ', ')} } from '${params.importPath.toString()}';`
    );
  };

  useEffect(() => {
    setTimeout(function () {
      updateContent();
    }, 10);
  }, [context]);

  return path && object ? (
    <>
      <Description>
        Make sure, prior to installing any Malty components, you have [Registered the
        Scope](https://malty.carlsberggroup.com/5715d933c/p/36d196-development/b/7760a0).
      </Description>
      <Description>
        To add this package to your project, install it with [Yarn](https://classic.yarnpkg.com/lang/en/docs/install),
        first:
      </Description>
      <Source language="bash" code={path} dark></Source>
      <Description>Once you have it installed, feel free to import it anywhere as follows:</Description>
      <Source language="ts" code={object} dark></Source>
      <Description>
        After having successfully installed and imported the component into your project, feel free to use it as shown
        below:
      </Description>
    </>
  ) : (
    <></>
  );
};

export default ImportPath;
