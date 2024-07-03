import dynamic from 'umi/dynamic'
import LazyLoader from '@/components/Loader/LazyLoader'

export default dynamic({
  loader: async function() {
    return import(/* webpackChunkName: "KeepLifeMark4Page" */ './KeepLifeMark4Page')
  },
  loading: LazyLoader
})
