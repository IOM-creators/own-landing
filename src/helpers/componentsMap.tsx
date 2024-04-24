import dynamic from 'next/dynamic';

export const componentMap:any = {
  HeroBanner: dynamic(() =>
    import('../components/hero-banner').then(module => module.default),
  ),
  Banner: dynamic(() =>
    import('../components/banner/Banner').then(module => module.default),
  ),
}