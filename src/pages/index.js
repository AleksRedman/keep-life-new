import Header from '@/components/blocks/Header'
import Banner from '@/components/blocks/Banner'
import Advantages from '@/components/blocks/Advantages'
import VideoBlock from '@/components/blocks/VideoBlock'
import PresentationBlock from '@/components/blocks/PresentationBlock'
import Problems from '@/components/blocks/Problems'
import Innovations from '@/components/blocks/Innovations'
import Mission from '@/components/blocks/Mission'
import Dev from '@/components/blocks/Dev'
import TechnicalProvision from '@/components/blocks/TechnicalProvision'
import Equipment from '@/components/blocks/Equipment'
import Partners from '@/components/blocks/Partners'
import Inside from '@/components/blocks/Inside'
// import Gallery from '@/components/blocks/Gallery'
// import Page1 from '@/components/Page1'
// import Page2 from '@/components/Page2'
// import Page3 from '@/components/Page3'
// import Page4 from '@/components/Page4'
// import Page5 from '@/components/Page5'
// import Page6 from '@/components/Page6'
// import VideoBanner from '@/components/VideoBanner'
// import Partners from '@/components/Partners'

import Footer from '@/components/blocks/Footer'

export default function() {
  return ([
      <Header key='header' lang='UA' />,
      <Banner key="banner" lang='UA' />,
      <PresentationBlock key="presentationBlock" lang='UA' />,
      <Problems key="problems" lang='UA' />,
      <Mission key="mission" lang='UA' />,
      <VideoBlock key="videoBlock" lang='UA' />,
      <Advantages key="advantages" lang='UA' />,
      <Innovations key="innovations" lang='UA' />,
      <Dev key="dev" lang='UA' />,
      <TechnicalProvision key='technicalProvision' lang='UA' />,
      <Equipment key='equipment' lang='UA' />,
      <Inside key="inside" lang='UA' />,
      <Partners key="partners" lang='UA' />,
      <Footer key="footer" lang='UA' />
      // <Advantages key="advantages" />,
      // <Page1 key="page1" />,
      // <Page2 key="page2" />,
      // <Page3 key="page3" />,
      // <VideoBanner key="videoBanner" />,
      // <Page4 key="page4" />,
      // // <Page5 key="page5" />,
      // <Partners key="partners" />,
      // <Page6 key="page6" />,
      // <Footer key='footer' />
  ])
}
