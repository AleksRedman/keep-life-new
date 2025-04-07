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

import Footer from '@/components/blocks/Footer'

export default function() {
  return ([
      <Header key='header' lang='DE' />,
      <Banner key="banner" lang='DE' />,
      <PresentationBlock key="presentationBlock" lang='DE' />,
      <Advantages key="advantages" lang='DE' />,
      <Mission key="mission" lang='DE' />,
      <VideoBlock key="videoBlock" lang='DE' />,
      <Problems key="problems" lang='DE' />,
      <Innovations key="innovations" lang='DE' />,
      <Dev key="dev" lang='DE' />,
      <TechnicalProvision key='technicalProvision' lang='DE' />,
      <Equipment key='equipment' lang='DE' />,
      <Inside key="inside" lang='DE' />,
      <Partners key="partners" lang='DE' />,
      <Footer key="footer" lang='DE' />
  ])
}
