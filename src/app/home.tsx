import { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'

import { api } from '@/src/services/api'

import { Places } from '@/src/components/places'
import { PlaceProps } from '@/src/components/place'
import { Categories, CategoriesProps } from '@/src/components/categories'

type MarketsProps = PlaceProps & {

}

export default function Home(){
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState('')
  const [markets, setMarkets] = useState<MarketsProps[]>([])
  
  async function fetchCategories(){
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.error(error)
      Alert.alert('Categorias', 'Não foi possível carregar as categorias')
    }
  }

  async function fetchMarkets(){
    try {
      if(!category){
        return
      }
      const { data } = await api.get('/markets/category/'+category)
      setMarkets(data)
    } catch (error) {
      console.error(error)
      Alert.alert('Locais', 'Não foi possível carregar os locais')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{flex: 1}}>
      <Categories data={categories} onSelect={setCategory} selected={category}></Categories>
      <Places data={markets}/>
    </View>
  )
}