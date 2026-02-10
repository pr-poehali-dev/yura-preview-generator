import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');
  const [style, setStyle] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c1810] via-[#3c2c1c] to-[#2c1810]">
      <nav className="border-b border-[#4a3a2a] bg-[#1a1410]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl text-[#f5deb3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              АЛЬЙГОЛДУ
            </h1>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-[#f5deb3] hover:text-[#5c8f3e] hover:bg-[#3c2c1c] transition-all">
                Генератор
              </Button>
              <Button variant="ghost" className="text-[#f5deb3] hover:text-[#5c8f3e] hover:bg-[#3c2c1c] transition-all">
                Премиум
              </Button>
              <Button variant="ghost" className="text-[#f5deb3] hover:text-[#5c8f3e] hover:bg-[#3c2c1c] transition-all">
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="animate-float inline-block mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#8b4513] to-[#5c3a1c] pixel-corners shadow-2xl flex items-center justify-center">
            <Icon name="Image" size={48} className="text-[#f5deb3]" />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl text-[#f5deb3] mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          Генератор Превью
        </h2>
        <p className="text-lg md:text-xl text-[#d4a574] mb-12 max-w-2xl mx-auto font-normal">
          Создавайте крутые превью для YouTube в стиле Minecraft! ИИ найдёт похожие видео и сделает уникальный дизайн
        </p>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <Card className="max-w-4xl mx-auto bg-[#3c2c1c]/90 border-[#5c4a3a] backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-[#f5deb3]">Создать Превью</CardTitle>
            <CardDescription className="text-[#d4a574]">
              Загрузите фото и заполните поля — ИИ создаст превью как у топовых видео
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f5deb3] block">
                Загрузить фото
              </label>
              <div className="border-2 border-dashed border-[#5c4a3a] rounded-sm p-8 text-center hover:border-[#5c8f3e] transition-all cursor-pointer bg-[#2c1c10]/50">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer block">
                  {image ? (
                    <div className="space-y-2">
                      <Icon name="CheckCircle" size={48} className="mx-auto text-[#5c8f3e]" />
                      <p className="text-[#f5deb3]">{image.name}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Icon name="Upload" size={48} className="mx-auto text-[#d4a574]" />
                      <p className="text-[#d4a574]">Нажмите для загрузки</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f5deb3] block">
                Название видео
              </label>
              <Input
                placeholder="Например: КАК ПОСТРОИТЬ ДОМ В МАЙНКРАФТ"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-[#2c1c10] border-[#5c4a3a] text-[#f5deb3] placeholder:text-[#8a7a6a] focus:border-[#5c8f3e]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f5deb3] block">
                Тема видео
              </label>
              <Textarea
                placeholder="Опишите тему: выживание, строительство, PvP..."
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-[#2c1c10] border-[#5c4a3a] text-[#f5deb3] placeholder:text-[#8a7a6a] focus:border-[#5c8f3e] min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f5deb3] block">
                Стиль превью
              </label>
              <Input
                placeholder="Например: яркий, драматичный, мемный"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="bg-[#2c1c10] border-[#5c4a3a] text-[#f5deb3] placeholder:text-[#8a7a6a] focus:border-[#5c8f3e]"
              />
            </div>

            <Button 
              className="w-full bg-[#5c8f3e] hover:bg-[#4a7a2e] text-white font-bold py-6 text-lg pixel-corners animate-pulse-glow shadow-2xl"
            >
              <Icon name="Sparkles" size={24} className="mr-2" />
              Создать Превью
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl text-[#f5deb3] text-center mb-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          Премиум Тарифы
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-[#3c2c1c]/90 border-[#5c4a3a] backdrop-blur-sm hover:scale-105 transition-transform">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-[#8b4513] pixel-corners flex items-center justify-center mb-4">
                <Icon name="Pickaxe" size={32} className="text-[#f5deb3]" />
              </div>
              <CardTitle className="text-xl text-[#f5deb3] text-center">Базовый</CardTitle>
              <CardDescription className="text-center text-[#d4a574] text-2xl font-bold mt-2">
                500₽/мес
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>10 превью в день</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>HD качество</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>5 стилей</span>
              </div>
              <Button className="w-full mt-6 bg-[#8b4513] hover:bg-[#6a3410] text-[#f5deb3] pixel-corners">
                Выбрать
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#5c8f3e]/20 to-[#3c2c1c]/90 border-[#5c8f3e] backdrop-blur-sm hover:scale-105 transition-transform shadow-2xl">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#5c8f3e] to-[#4a7a2e] pixel-corners flex items-center justify-center mb-4 animate-float">
                <Icon name="Crown" size={32} className="text-[#f5deb3]" />
              </div>
              <CardTitle className="text-xl text-[#f5deb3] text-center">Премиум</CardTitle>
              <CardDescription className="text-center text-[#5c8f3e] text-2xl font-bold mt-2">
                1500₽/мес
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>Безлимит превью</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>4K качество</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>20 стилей</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>Приоритет генерации</span>
              </div>
              <Button className="w-full mt-6 bg-[#5c8f3e] hover:bg-[#4a7a2e] text-white pixel-corners animate-pulse-glow">
                Выбрать
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#3c2c1c]/90 border-[#5c4a3a] backdrop-blur-sm hover:scale-105 transition-transform">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-[#8b4513] pixel-corners flex items-center justify-center mb-4">
                <Icon name="Sword" size={32} className="text-[#f5deb3]" />
              </div>
              <CardTitle className="text-xl text-[#f5deb3] text-center">Про</CardTitle>
              <CardDescription className="text-center text-[#d4a574] text-2xl font-bold mt-2">
                3000₽/мес
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>Всё из Премиум</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>API доступ</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>Кастом стили</span>
              </div>
              <div className="flex items-center gap-2 text-[#d4a574]">
                <Icon name="Check" size={20} className="text-[#5c8f3e]" />
                <span>Поддержка 24/7</span>
              </div>
              <Button className="w-full mt-6 bg-[#8b4513] hover:bg-[#6a3410] text-[#f5deb3] pixel-corners">
                Выбрать
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <Card className="max-w-2xl mx-auto bg-[#3c2c1c]/90 border-[#5c4a3a] backdrop-blur-sm">
          <CardHeader>
            <div className="w-16 h-16 mx-auto bg-[#5c8f3e] pixel-corners flex items-center justify-center mb-4 animate-float">
              <Icon name="MessageCircle" size={32} className="text-[#f5deb3]" />
            </div>
            <CardTitle className="text-2xl text-[#f5deb3] text-center">Связаться с нами</CardTitle>
            <CardDescription className="text-center text-[#d4a574]">
              Остались вопросы? Напишите нам в Telegram
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f5deb3] block">
                Ваше имя
              </label>
              <Input
                placeholder="Введите имя"
                className="bg-[#2c1c10] border-[#5c4a3a] text-[#f5deb3] placeholder:text-[#8a7a6a] focus:border-[#5c8f3e]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f5deb3] block">
                Сообщение
              </label>
              <Textarea
                placeholder="Ваш вопрос или предложение"
                className="bg-[#2c1c10] border-[#5c4a3a] text-[#f5deb3] placeholder:text-[#8a7a6a] focus:border-[#5c8f3e] min-h-[120px]"
              />
            </div>

            <Button 
              className="w-full bg-[#5c8f3e] hover:bg-[#4a7a2e] text-white font-bold py-6 text-lg pixel-corners"
            >
              <Icon name="Send" size={24} className="mr-2" />
              Отправить в Telegram
            </Button>

            <p className="text-center text-sm text-[#8a7a6a]">
              Или напишите напрямую: <a href="https://t.me/Aks1k_bot" target="_blank" rel="noopener noreferrer" className="text-[#5c8f3e] hover:underline">@Aks1k_bot</a>
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-[#4a3a2a] bg-[#1a1410]/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#8a7a6a] text-sm">
            © 2024 АЛЬЙГОЛДУ. Powered by Nano Banano AI
          </p>
        </div>
      </footer>
    </div>
  );
}
