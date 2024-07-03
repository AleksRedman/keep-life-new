import dynamic from 'umi/dynamic'
import LazyLoader from '@/components/Loader/LazyLoader'

export default dynamic({
  loader: async function() {
    return import(/* webpackChunkName: "KeepLifeMark2Page" */ './KeepLifeMark2Page')
  },
  loading: LazyLoader
})
