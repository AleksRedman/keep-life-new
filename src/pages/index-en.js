import Header from '@/components/blocks/Header'
import Banner from '@/components/blocks/Banner'
import Advantages from '@/components/blocks/Advantages'
import VideoBlock from '@/components/blocks/VideoBlock'
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
      <Header key='header' lang='EN' />,
      <Banner key="banner" lang='EN' />,
      <Advantages key="advantages" lang='EN' />,
      <Mission key="mission" lang='EN' />,
      <VideoBlock key="videoBlock" lang='EN' />,
      <Problems key="problems" lang='EN' />,
      <Innovations key="innovations" lang='EN' />,
      <Dev key="dev" lang='EN' />,
      <TechnicalProvision key='technicalProvision' lang='EN' />,
      <Equipment key='equipment' lang='EN' />,
      <Inside key="inside" lang='EN' />,
      <Partners key="partners" lang='EN' />,
      <Footer key="footer" lang='EN' />
  ])
}
