Customer Management App

Bu proje, Spring Boot (Backend) ve React (Frontend) teknolojileri kullanılarak geliştirilmiş bir Müşteri Yönetim Uygulamasıdır. Kullanıcı giriş sistemi, müşteri listeleme ve şifre değiştirme gibi temel işlevleri içermektedir.

Kurulum Talimatları

1. Reponun Klonlanması

Terminal veya komut satırında aşağıdaki komutu çalıştırarak projeyi klonlayın:
git clone https://github.com/kadirbugrat/customer-management-app.git
cd customer-management-app

2. Backend (Spring Boot) Kurulumu

backend dizinine geçin:
cd backend

Maven ile projeyi derleyip çalıştırın:
mvn spring-boot:run

Uygulama varsayılan olarak şu adreste çalışır:
http://localhost:8080

3. Frontend (React) Kurulumu

Yeni bir terminal penceresi açın ve frontend dizinine geçin:
cd frontend

Gerekli bağımlılıkları yükleyin:
npm install

React uygulamasını başlatın:
npm start

Uygulama varsayılan olarak şu adreste çalışır:
http://localhost:3000

Kullanıcı Girişi

Projede bir kullanıcı giriş ekranı bulunmaktadır.
Kullanıcı Adı: admin
Şifre: admin123

Giriş yaptıktan sonra aşağıdaki işlemleri gerçekleştirebilirsiniz:
Müşteri listesi görüntüleme
Yeni müşteri ekleme
Şifre değiştirme

Giriş yaptıktan sonra "Change Password" bağlantısına tıklayın.
Açılan formda eski şifrenizi ve yeni şifrenizi girerek değişikliği yapabilirsiniz.
Şifre değişikliği kalıcıdır ve veritabanına kaydedilir.
