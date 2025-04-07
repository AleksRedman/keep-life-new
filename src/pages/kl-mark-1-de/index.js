import dynamic from 'umi/dynamic'
import LazyLoader from '@/components/Loader/LazyLoader'

export default dynamic({
  loader: async function() {
    return import(/* webpackChunkName: "KeepLifeMark1Page" */ './KeepLifeMark1Page')
  },
  loading: LazyLoader
})
