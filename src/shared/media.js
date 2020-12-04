import { css } from 'styled-components';

// Responsive design
export const phoneMediaQuery = 'max-width: 768px';
export const tabletMediaQuery = 'max-width: 957px';
export const smallDesktopMediaQuery = 'max-width: 1200px';
export const desktopMediaQuery = 'min-width: 1200px';

const media = {
  phone: (...args) => css`
    @media (${phoneMediaQuery}) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (${tabletMediaQuery}) {
      ${css(...args)};
    }
  `,
  smallDesktop: (...args) => css`
    @media (${smallDesktopMediaQuery}) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (${desktopMediaQuery}) {
      ${css(...args)};
    }
  `
};

export default media;
