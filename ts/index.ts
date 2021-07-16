class ValueHolder<TypeForValueProperty> {
  value: TypeForValueProperty
}

const numberHolder = new ValueHolder<number>()

numberHolder.value = 10;