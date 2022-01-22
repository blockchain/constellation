import React from 'react'
// import { ComponentMeta, ComponentStory } from '@storybook/react'
//
// import { colors } from '../../colors'
// import Text from '.'
// import { TextProps } from './types'
//
// export default {
//   argTypes: {
//     color: {
//       description: 'color of the text',
//       options: Object.keys(colors),
//       type: 'select',
//     },
//   },
//   component: Text,
//   title: 'Components/Text',
// } as unknown as ComponentMeta<typeof Text>
//
// export const Default: ComponentStory<typeof Text> = (args) => <Text {...args} />
//
// Default.args = { children: 'The quick brown fox jumps over the lazy dog' }
//
// export const AllVariants: ComponentStory<typeof Text> = (args) => {
//   const variants: TextProps['variant'][] = [
//     'display',
//     'title-1',
//     'title-2',
//     'title-3',
//     'subheading',
//     'body-mono',
//     'body-1',
//     'body-2',
//     'paragraph-mono',
//     'paragraph-1',
//     'paragraph-2',
//     'caption-1',
//     'caption-2',
//     'overline',
//     'micro',
//   ]
//
//   return (
//     <>
//       {variants.map((variant) => (
//         <Text key={variant} {...args} variant={variant}>
//           The quick brown fox jumps over the lazy dog ({variant})
//         </Text>
//       ))}
//     </>
//   )
// }
//
// AllVariants.parameters = {
//   controls: { exclude: 'variant' },
// }
