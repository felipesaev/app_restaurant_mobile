import { FlatList, TouchableOpacity } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';


import { Product, ProductImage, ProductDetails, Separator, AddToCardButton } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage source={{
            uri: product.imagePath
          }}/>
          <ProductDetails>
            <Text weight='600' style={{ marginVertical: 8}}>{product.name} </Text>
            <Text size={14} color="#666">{product.description}</Text>
            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCardButton>
            <PlusCircle />
          </AddToCardButton>
        </Product>
      )}
    />
  );
}
