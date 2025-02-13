import { Pressable, PressableProps, Text, View } from "react-native";

import { coffeesImage } from "../../data/coffee"

import { styles } from "./styles";

type Props = PressableProps & {
  title: string;
  description: string;
  type: string;
  price: number;
};

function showImageCoffee(title: string) {
  switch (title) {
    case 'Expresso Americano':
      return <coffeesImage.expressoAmericano style={styles.image} />;

    case 'Expresso Americano':
      return <coffeesImage.expressoAmericano style={styles.image} />;

    case 'Expresso Cremoso':
      return <coffeesImage.expressoCremoso style={styles.image} />;

    case 'Latte':
        return <coffeesImage.latte style={styles.image} />;

    case 'Expresso Gelado':
      return <coffeesImage.expressoGelado style={styles.image} />;
  
    case 'Capuccino':
      return <coffeesImage.capuccino style={styles.image} />;

    case 'Mocaccino':
      return <coffeesImage.mocaccino style={styles.image} />;

    case 'Chocolate Quente':  
      return <coffeesImage.chocolateQuente style={styles.image} />;

    case 'Cubano':
      return <coffeesImage.cubano style={styles.image} />;

    case 'Havaiano':
      return <coffeesImage.havaiano style={styles.image} />;
      
    case 'Árabe':
      return <coffeesImage.arabe style={styles.image} />;

    case 'Irlandês':
      return <coffeesImage.irlandes style={styles.image} />;

    default:
      return <coffeesImage.expressoTradicional style={styles.image} />;
  }
}

export function VerticalCard({ title, description, price, type, ...rest }: Props) {
  return (
    <Pressable style={styles.container} { ...rest }>
      { showImageCoffee(title) }

      <Text style={styles.tag}>
        {type.toUpperCase()}
      </Text>

      <View>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>

          <View style={styles.price}>
            <Text style={styles.currency}> R$ </Text>
            <Text style={styles.amount}> {price.toFixed(2)} </Text>
          </View>
      </View>
    </Pressable>
  )
}