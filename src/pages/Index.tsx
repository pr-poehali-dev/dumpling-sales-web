import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      name: 'Пельмени',
      description: 'Классические домашние пельмени с мясной начинкой',
      price: 'от 450₽',
      image: '/img/48787237-93fb-4f1e-9978-cb97e7942061.jpg',
      popular: true
    },
    {
      id: 2,
      name: 'Вареники',
      description: 'Традиционные вареники с картофелем и луком',
      price: 'от 380₽',
      image: '/img/b18b69d9-969c-43f8-bac5-5aff6366a328.jpg',
      popular: false
    },
    {
      id: 3,
      name: 'Манты',
      description: 'Паровые манты с сочной мясной начинкой',
      price: 'от 520₽',
      image: '/img/d2307f90-eec2-4a13-add1-8d1330fdc3d5.jpg',
      popular: true
    },
    {
      id: 4,
      name: 'Котлеты',
      description: 'Домашние котлеты из свежего фарша',
      price: 'от 400₽',
      image: '/img/48787237-93fb-4f1e-9978-cb97e7942061.jpg',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-mint-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ChefHat" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">Домашние вкусности</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Продукция</a>
              <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Домашние <span className="text-primary">пельмени</span> и вареники
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ручная лепка, натуральные ингредиенты, традиционные рецепты. 
            Минимальный заказ от 1000₽
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Наша продукция
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-2 right-2 bg-primary">
                      Популярное
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Hand" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Ручная лепка</h4>
              <p className="text-gray-600">Каждый пельмень делается вручную по традиционным рецептам</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">Доставляем свежую продукцию в день заказа</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Качество</h4>
              <p className="text-gray-600">Только натуральные ингредиенты, никаких консервантов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="delivery" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Как заказать
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-primary">Условия заказа</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-secondary mr-3 mt-1" size={20} />
                    <span>Минимальный заказ от 1000₽</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-secondary mr-3 mt-1" size={20} />
                    <span>Бесплатная доставка от 2000₽</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-secondary mr-3 mt-1" size={20} />
                    <span>Доставка в день заказа</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="text-secondary mr-3 mt-1" size={20} />
                    <span>Оплата наличными или картой</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-primary">Способы оплаты</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center p-4 border rounded-lg">
                    <Icon name="CreditCard" className="text-accent mr-3" size={24} />
                    <span>Картой</span>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <Icon name="Banknote" className="text-accent mr-3" size={24} />
                    <span>Наличными</span>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <Icon name="Smartphone" className="text-accent mr-3" size={24} />
                    <span>СБП</span>
                  </div>
                  <div className="flex items-center p-4 border rounded-lg">
                    <Icon name="Wallet" className="text-accent mr-3" size={24} />
                    <span>Переводом</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 text-gray-900">
              Свяжитесь с нами
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center">
                <Icon name="Phone" className="text-primary mr-3" size={24} />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Icon name="MessageCircle" className="text-secondary mr-3" size={24} />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Сделать заказ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-dark text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Icon name="ChefHat" className="text-primary mr-2" size={24} />
            <span className="text-xl font-semibold">Домашние вкусности</span>
          </div>
          <p className="text-gray-300">
            Домашние пельмени, вареники, манты и котлеты с доставкой
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;