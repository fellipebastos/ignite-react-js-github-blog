const colors = {
  white: '#fff',

  gray: {
    '50': '#E7EDF4',
    '100': '#C4D4E3',
    '200': '#AFC2D4',
    '300': '#7B96B2',
    '400': '#3A536B',
    '500': '#1C2F41',
    '600': '#112131',
    '700': '#0B1B2B',
    '800': '#071422',
    '900': '#040F1A',
  },
  blue: {
    '500': '#3294F8',
  },
}

export const defaultTheme = {
  colors: {
    ...colors,
    base: {
      title: colors.gray['50'],
      subtitle: colors.gray['100'],
      text: colors.gray['200'],
      span: colors.gray['300'],
      label: colors.gray['400'],
      border: colors.gray['500'],
      post: colors.gray['600'],
      profile: colors.gray['700'],
      background: colors.gray['800'],
      input: colors.gray['900'],
    },
    primary: colors.blue['500'],
  },
  font: {
    primary: {
      family: "'Nunito', sans-serif",
      weight: {
        regular: 400,
        bold: 700,
      },
      size: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.5rem',
      },
    },
  },
} as const
