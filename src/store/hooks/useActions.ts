import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '..'
import rootActions from '../rootActions'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
