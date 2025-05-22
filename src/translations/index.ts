/**
 * Translation system for the application
 * Contains all text strings organized by language
 */

import { Language } from '@/utils/i18n'

// Define the structure of our translations
type TranslationKeys = {
  common: {
    login: string
    logout: string
    back: string
    loading: string
    error: string
    success: string
  }
  home: {
    title: string
    subtitle: string
    selectAmount: string
    startDca: string
    walletAddress: string
    dcaStarted: string
    dcaStartedDescription: string
    sendEth: string
    transactionSuccess: string
    transactionFailed: string
    notConnected: string
    insufficientBalance: string
  }
  newPage: {
    title: string
    subtitle: string
    accountInfo: string
    connectedAddress: string
    balance: string
    connectWallet: string
    lastTransaction: string
    backHome: string
  }
  wallet: {
    title: string
    description: string
    noWalletFound: string
    createWallet: string
  }
}

// Translation objects for each supported language
const translations: Record<Language, TranslationKeys> = {
  // English
  en: {
    common: {
      login: 'Login',
      logout: 'Logout',
      back: 'Back',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'Buy a handful of ETH each month',
      selectAmount: 'Select your monthly investment amount',
      startDca: 'Start DCA with €{amount}/month',
      walletAddress: 'Your wallet address:',
      dcaStarted: 'DCA Started',
      dcaStartedDescription: 'Starting Dollar Cost Averaging with €{amount} per month',
      sendEth: 'Send ETH',
      transactionSuccess: 'Transaction successful!',
      transactionFailed: 'Transaction failed',
      notConnected: 'Please connect your wallet',
      insufficientBalance: 'Insufficient balance',
    },
    newPage: {
      title: 'Dashboard',
      subtitle: 'Monitor your DCA strategy',
      accountInfo: 'Account Information',
      connectedAddress: 'Connected address:',
      balance: 'Balance:',
      connectWallet: 'Please connect your wallet to view your dashboard',
      lastTransaction: 'Last transaction:',
      backHome: 'Back to Home',
    },
    wallet: {
      title: 'Wallet',
      description: 'Connect your wallet to start investing',
      noWalletFound: 'No wallet found',
      createWallet: 'Create wallet',
    },
  },

  // Chinese (Simplified)
  zh: {
    common: {
      login: '登录',
      logout: '登出',
      back: '返回',
      loading: '加载中...',
      error: '错误',
      success: '成功',
    },
    home: {
      title: 'ETH 定投',
      subtitle: '每月购买一些以太币',
      selectAmount: '选择您的月投资金额',
      startDca: '开始定投 €{amount}/月',
      walletAddress: '您的钱包地址：',
      dcaStarted: '定投已开始',
      dcaStartedDescription: '开始定投计划，每月投资 €{amount}',
      sendEth: '发送 ETH',
      transactionSuccess: '交易成功！',
      transactionFailed: '交易失败',
      notConnected: '请连接您的钱包',
      insufficientBalance: '余额不足',
    },
    newPage: {
      title: '仪表板',
      subtitle: '监控您的定投策略',
      accountInfo: '账户信息',
      connectedAddress: '已连接地址：',
      balance: '余额：',
      connectWallet: '请连接您的钱包以查看仪表板',
      lastTransaction: '最后一笔交易：',
      backHome: '返回首页',
    },
    wallet: {
      title: '钱包',
      description: '连接您的钱包开始投资',
      noWalletFound: '未找到钱包',
      createWallet: '创建钱包',
    },
  },

  // Hindi
  hi: {
    common: {
      login: 'लॉगिन',
      logout: 'लॉगआउट',
      back: 'वापस',
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफल',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'हर महीने थोड़ा ETH खरीदें',
      selectAmount: 'अपनी मासिक निवेश राशि चुनें',
      startDca: '€{amount}/महीने के साथ DCA शुरू करें',
      walletAddress: 'आपका वॉलेट पता:',
      dcaStarted: 'DCA शुरू हो गया',
      dcaStartedDescription: '€{amount} प्रति माह के साथ डॉलर कॉस्ट एवरेजिंग शुरू',
      sendEth: 'ETH भेजें',
      transactionSuccess: 'लेन-देन सफल!',
      transactionFailed: 'लेन-देन असफल',
      notConnected: 'कृपया अपना वॉलेट कनेक्ट करें',
      insufficientBalance: 'अपर्याप्त शेष राशि',
    },
    newPage: {
      title: 'डैशबोर्ड',
      subtitle: 'अपनी DCA रणनीति की निगरानी करें',
      accountInfo: 'खाता जानकारी',
      connectedAddress: 'जुड़ा हुआ पता:',
      balance: 'शेष राशि:',
      connectWallet: 'डैशबोर्ड देखने के लिए कृपया अपना वॉलेट कनेक्ट करें',
      lastTransaction: 'अंतिम लेन-देन:',
      backHome: 'होम पेज पर वापस',
    },
    wallet: {
      title: 'वॉलेट',
      description: 'निवेश शुरू करने के लिए अपना वॉलेट कनेक्ट करें',
      noWalletFound: 'कोई वॉलेट नहीं मिला',
      createWallet: 'वॉलेट बनाएं',
    },
  },

  // Spanish
  es: {
    common: {
      login: 'Iniciar sesión',
      logout: 'Cerrar sesión',
      back: 'Volver',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'Compra un poco de ETH cada mes',
      selectAmount: 'Selecciona tu cantidad de inversión mensual',
      startDca: 'Iniciar DCA con €{amount}/mes',
      walletAddress: 'Tu dirección de cartera:',
      dcaStarted: 'DCA Iniciado',
      dcaStartedDescription: 'Iniciando Promedio de Costo en Dólares con €{amount} por mes',
      sendEth: 'Enviar ETH',
      transactionSuccess: '¡Transacción exitosa!',
      transactionFailed: 'Transacción fallida',
      notConnected: 'Por favor conecta tu cartera',
      insufficientBalance: 'Saldo insuficiente',
    },
    newPage: {
      title: 'Tablero',
      subtitle: 'Monitorea tu estrategia DCA',
      accountInfo: 'Información de la cuenta',
      connectedAddress: 'Dirección conectada:',
      balance: 'Saldo:',
      connectWallet: 'Por favor conecta tu cartera para ver tu tablero',
      lastTransaction: 'Última transacción:',
      backHome: 'Volver al inicio',
    },
    wallet: {
      title: 'Cartera',
      description: 'Conecta tu cartera para empezar a invertir',
      noWalletFound: 'No se encontró cartera',
      createWallet: 'Crear cartera',
    },
  },

  // French
  fr: {
    common: {
      login: 'Se connecter',
      logout: 'Se déconnecter',
      back: 'Retour',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
    },
    home: {
      title: 'ETH DCA',
      subtitle: "Achetez un peu d'ETH chaque mois",
      selectAmount: "Sélectionnez votre montant d'investissement mensuel",
      startDca: 'Commencer DCA avec €{amount}/mois',
      walletAddress: 'Votre adresse de portefeuille :',
      dcaStarted: 'DCA Commencé',
      dcaStartedDescription: 'Démarrage de la moyenne des coûts en dollars avec €{amount} par mois',
      sendEth: 'Envoyer ETH',
      transactionSuccess: 'Transaction réussie !',
      transactionFailed: 'Transaction échouée',
      notConnected: 'Veuillez connecter votre portefeuille',
      insufficientBalance: 'Solde insuffisant',
    },
    newPage: {
      title: 'Tableau de bord',
      subtitle: 'Surveillez votre stratégie DCA',
      accountInfo: 'Informations du compte',
      connectedAddress: 'Adresse connectée :',
      balance: 'Solde :',
      connectWallet: 'Veuillez connecter votre portefeuille pour voir votre tableau de bord',
      lastTransaction: 'Dernière transaction :',
      backHome: "Retour à l'accueil",
    },
    wallet: {
      title: 'Portefeuille',
      description: 'Connectez votre portefeuille pour commencer à investir',
      noWalletFound: 'Aucun portefeuille trouvé',
      createWallet: 'Créer un portefeuille',
    },
  },

  // Arabic
  ar: {
    common: {
      login: 'تسجيل الدخول',
      logout: 'تسجيل الخروج',
      back: 'رجوع',
      loading: 'جارٍ التحميل...',
      error: 'خطأ',
      success: 'نجح',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'اشترِ القليل من ETH كل شهر',
      selectAmount: 'اختر مبلغ استثمارك الشهري',
      startDca: 'ابدأ DCA بـ €{amount}/شهر',
      walletAddress: 'عنوان محفظتك:',
      dcaStarted: 'بدأ DCA',
      dcaStartedDescription: 'بدء متوسط التكلفة بالدولار مع €{amount} شهرياً',
      sendEth: 'إرسال ETH',
      transactionSuccess: 'نجحت المعاملة!',
      transactionFailed: 'فشلت المعاملة',
      notConnected: 'يرجى ربط محفظتك',
      insufficientBalance: 'رصيد غير كافٍ',
    },
    newPage: {
      title: 'لوحة القيادة',
      subtitle: 'راقب استراتيجية DCA الخاصة بك',
      accountInfo: 'معلومات الحساب',
      connectedAddress: 'العنوان المتصل:',
      balance: 'الرصيد:',
      connectWallet: 'يرجى ربط محفظتك لعرض لوحة القيادة',
      lastTransaction: 'آخر معاملة:',
      backHome: 'العودة للرئيسية',
    },
    wallet: {
      title: 'المحفظة',
      description: 'اربط محفظتك لبدء الاستثمار',
      noWalletFound: 'لم يتم العثور على محفظة',
      createWallet: 'إنشاء محفظة',
    },
  },

  // Bengali
  bn: {
    common: {
      login: 'লগইন',
      logout: 'লগআউট',
      back: 'ফিরে যান',
      loading: 'লোড হচ্ছে...',
      error: 'ত্রুটি',
      success: 'সফল',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'প্রতি মাসে কিছু ETH কিনুন',
      selectAmount: 'আপনার মাসিক বিনিয়োগের পরিমাণ নির্বাচন করুন',
      startDca: '€{amount}/মাস দিয়ে DCA শুরু করুন',
      walletAddress: 'আপনার ওয়ালেট ঠিকানা:',
      dcaStarted: 'DCA শুরু হয়েছে',
      dcaStartedDescription: 'মাসিক €{amount} দিয়ে ডলার কস্ট অ্যাভারেজিং শুরু',
      sendEth: 'ETH পাঠান',
      transactionSuccess: 'লেনদেন সফল!',
      transactionFailed: 'লেনদেন ব্যর্থ',
      notConnected: 'দয়া করে আপনার ওয়ালেট সংযুক্ত করুন',
      insufficientBalance: 'অপর্যাপ্ত ব্যালেন্স',
    },
    newPage: {
      title: 'ড্যাশবোর্ড',
      subtitle: 'আপনার DCA কৌশল নিরীক্ষণ করুন',
      accountInfo: 'অ্যাকাউন্টের তথ্য',
      connectedAddress: 'সংযুক্ত ঠিকানা:',
      balance: 'ব্যালেন্স:',
      connectWallet: 'ড্যাশবোর্ড দেখতে দয়া করে আপনার ওয়ালেট সংযুক্ত করুন',
      lastTransaction: 'শেষ লেনদেন:',
      backHome: 'হোমে ফিরে যান',
    },
    wallet: {
      title: 'ওয়ালেট',
      description: 'বিনিয়োগ শুরু করতে আপনার ওয়ালেট সংযুক্ত করুন',
      noWalletFound: 'কোন ওয়ালেট পাওয়া যায়নি',
      createWallet: 'ওয়ালেট তৈরি করুন',
    },
  },

  // Russian
  ru: {
    common: {
      login: 'Войти',
      logout: 'Выйти',
      back: 'Назад',
      loading: 'Загрузка...',
      error: 'Ошибка',
      success: 'Успех',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'Покупайте немного ETH каждый месяц',
      selectAmount: 'Выберите сумму ежемесячных инвестиций',
      startDca: 'Начать DCA с €{amount}/месяц',
      walletAddress: 'Адрес вашего кошелька:',
      dcaStarted: 'DCA Запущен',
      dcaStartedDescription: 'Запуск усреднения долларовой стоимости с €{amount} в месяц',
      sendEth: 'Отправить ETH',
      transactionSuccess: 'Транзакция успешна!',
      transactionFailed: 'Транзакция не удалась',
      notConnected: 'Пожалуйста, подключите ваш кошелек',
      insufficientBalance: 'Недостаточный баланс',
    },
    newPage: {
      title: 'Панель управления',
      subtitle: 'Отслеживайте свою стратегию DCA',
      accountInfo: 'Информация об аккаунте',
      connectedAddress: 'Подключенный адрес:',
      balance: 'Баланс:',
      connectWallet: 'Пожалуйста, подключите ваш кошелек для просмотра панели управления',
      lastTransaction: 'Последняя транзакция:',
      backHome: 'Вернуться на главную',
    },
    wallet: {
      title: 'Кошелек',
      description: 'Подключите ваш кошелек для начала инвестирования',
      noWalletFound: 'Кошелек не найден',
      createWallet: 'Создать кошелек',
    },
  },

  // Portuguese
  pt: {
    common: {
      login: 'Entrar',
      logout: 'Sair',
      back: 'Voltar',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'Compre um pouco de ETH todo mês',
      selectAmount: 'Selecione seu valor de investimento mensal',
      startDca: 'Iniciar DCA com €{amount}/mês',
      walletAddress: 'Seu endereço de carteira:',
      dcaStarted: 'DCA Iniciado',
      dcaStartedDescription: 'Iniciando Média de Custo em Dólares com €{amount} por mês',
      sendEth: 'Enviar ETH',
      transactionSuccess: 'Transação bem-sucedida!',
      transactionFailed: 'Transação falhou',
      notConnected: 'Por favor conecte sua carteira',
      insufficientBalance: 'Saldo insuficiente',
    },
    newPage: {
      title: 'Painel',
      subtitle: 'Monitore sua estratégia DCA',
      accountInfo: 'Informações da conta',
      connectedAddress: 'Endereço conectado:',
      balance: 'Saldo:',
      connectWallet: 'Por favor conecte sua carteira para ver seu painel',
      lastTransaction: 'Última transação:',
      backHome: 'Voltar ao início',
    },
    wallet: {
      title: 'Carteira',
      description: 'Conecte sua carteira para começar a investir',
      noWalletFound: 'Nenhuma carteira encontrada',
      createWallet: 'Criar carteira',
    },
  },

  // Urdu
  ur: {
    common: {
      login: 'لاگ ان',
      logout: 'لاگ آؤٹ',
      back: 'واپس',
      loading: 'لوڈ ہو رہا ہے...',
      error: 'خرابی',
      success: 'کامیابی',
    },
    home: {
      title: 'ETH DCA',
      subtitle: 'ہر مہینے تھوڑا سا ETH خریدیں',
      selectAmount: 'اپنی ماہانہ سرمایہ کاری کی رقم منتخب کریں',
      startDca: '€{amount}/مہینہ کے ساتھ DCA شروع کریں',
      walletAddress: 'آپ کا والیٹ ایڈریس:',
      dcaStarted: 'DCA شروع ہو گیا',
      dcaStartedDescription: 'ماہانہ €{amount} کے ساتھ ڈالر کاسٹ ایوریجنگ شروع کرنا',
      sendEth: 'ETH بھیجیں',
      transactionSuccess: 'لین دین کامیاب!',
      transactionFailed: 'لین دین ناکام',
      notConnected: 'براہ کرم اپنا والیٹ جوڑیں',
      insufficientBalance: 'ناکافی بیلنس',
    },
    newPage: {
      title: 'ڈیش بورڈ',
      subtitle: 'اپنی DCA حکمت عملی کی نگرانی کریں',
      accountInfo: 'اکاؤنٹ کی معلومات',
      connectedAddress: 'جڑا ہوا پتہ:',
      balance: 'بیلنس:',
      connectWallet: 'ڈیش بورڈ دیکھنے کے لیے براہ کرم اپنا والیٹ جوڑیں',
      lastTransaction: 'آخری لین دین:',
      backHome: 'ہوم پر واپس',
    },
    wallet: {
      title: 'والیٹ',
      description: 'سرمایہ کاری شروع کرنے کے لیے اپنا والیٹ جوڑیں',
      noWalletFound: 'کوئی والیٹ نہیں ملا',
      createWallet: 'والیٹ بنائیں',
    },
  },
}

/**
 * Get translations for a specific language
 * @param language Language code
 * @returns Translation object for the specified language
 */
export function getTranslations(language: Language): TranslationKeys {
  return translations[language] || translations.en
}

/**
 * Utility function to replace placeholders in translation strings
 * @param template Translation string with placeholders like {amount}
 * @param values Object with values to replace placeholders
 * @returns String with placeholders replaced
 */
export function formatTranslation(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key]?.toString() || match
  })
}
