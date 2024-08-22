import { ButtonStyle, ButtonBuilder, CacheType, Collection, IntentsBitField, Interaction, PermissionsBitField, CommandInteraction } from "discord.js";
import DiscordClient from "../client/client";
import { getRepository } from "typeorm";
import { GuildConfiguration } from "../typeorm/entities/GuildConfiguration";
const wait = require('node:timers/promises').setTimeout;
const { ActionRowBuilder, EmbedBuilder } = require('discord.js');

export class slashCommands {
private readonly guildConfigRepository = getRepository(GuildConfiguration)
slashCommands(interaction: Interaction<CacheType>, client: DiscordClient) {
let config = client.configs.get(interaction.guildId!);

(async () => {
type Locale = 'id' | 'da' | 'de' | 'en-GB' | 'en-US' | 'es-ES' | 'es-419' | 'fr' | 'hr' | 'it' | 'lt' | 'hu' | 'nl' | 'no' | 'pl' | 'pt-BR' | 'ro' | 'fi' | 'sv-SE' | 'vi' | 'tr' | 'cs' | 'el' | 'bg' | 'ru' | 'uk' | 'hi' | 'th' | 'zh-CN' | 'ja' | 'zh-TW' | 'ko';

const confirm_ban_message: Record<Locale, { title: string, description: string, userField: string, reasonField: string, noReason: string }> = {
  'id': { title: 'Anda ingin melarang {user}?', description: 'Tekan tombol di bawah untuk melanjutkan', userField: 'Nama pengguna', reasonField: 'Alasan', noReason: 'Tidak ada alasan' },
  'da': { title: 'Vil du forbyde {user}?', description: 'Tryk på knappen nedenfor for at fortsætte', userField: 'Brugernavn', reasonField: 'Grund', noReason: 'Ingen grund angivet' },
  'de': { title: 'Möchten Sie {user} verbannen?', description: 'Drücken Sie die Schaltfläche unten, um fortzufahren', userField: 'Benutzername', reasonField: 'Grund', noReason: 'Kein Grund angegeben' },
  'en-GB': { title: 'Do you want to ban {user}?', description: 'Press the button below to proceed', userField: 'Username', reasonField: 'Reason', noReason: 'No reason provided' },
  'en-US': { title: 'Do you want to ban {user}?', description: 'Press the button below to proceed', userField: 'Username', reasonField: 'Reason', noReason: 'No reason provided' },
  'es-ES': { title: '¿Quieres prohibir a {user}?', description: 'Presiona el botón de abajo para continuar', userField: 'Nombre de usuario', reasonField: 'Razón', noReason: 'No se proporcionó ninguna razón' },
  'es-419': { title: '¿Quieres prohibir a {user}?', description: 'Presiona el botón de abajo para continuar', userField: 'Nombre de usuario', reasonField: 'Razón', noReason: 'No se proporcionó ninguna razón' },
  'fr': { title: 'Voulez-vous bannir {user} ?', description: 'Appuyez sur le bouton ci-dessous pour continuer', userField: 'Nom d\'utilisateur', reasonField: 'Raison', noReason: 'Aucune raison fournie' },
  'hr': { title: 'Želite li zabraniti {user}?', description: 'Pritisnite gumb ispod za nastavak', userField: 'Korisničko ime', reasonField: 'Razlog', noReason: 'Nema razloga' },
  'it': { title: 'Vuoi vietare {user}?', description: 'Premi il pulsante qui sotto per procedere', userField: 'Nome utente', reasonField: 'Motivo', noReason: 'Nessun motivo fornito' },
  'lt': { title: 'Ar norite uždrausti {user}?', description: 'Paspauskite žemiau esantį mygtuką, kad tęstumėte', userField: 'Vartotojo vardas', reasonField: 'Priežastis', noReason: 'Nėra nurodytos priežasties' },
  'hu': { title: 'Szeretnéd kitiltani {user}?', description: 'Nyomd meg a lenti gombot a folytatáshoz', userField: 'Felhasználónév', reasonField: 'Indok', noReason: 'Nincs megadott indok' },
  'nl': { title: 'Wil je {user} verbannen?', description: 'Druk op de knop hieronder om door te gaan', userField: 'Gebruikersnaam', reasonField: 'Reden', noReason: 'Geen reden opgegeven' },
  'no': { title: 'Vil du forby {user}?', description: 'Trykk på knappen nedenfor for å fortsette', userField: 'Brukernavn', reasonField: 'Grunn', noReason: 'Ingen grunn angitt' },
  'pl': { title: 'Czy chcesz zakazać {user}?', description: 'Naciśnij przycisk poniżej, aby kontynuować', userField: 'Nazwa użytkownika', reasonField: 'Powód', noReason: 'Nie podano powodu' },
  'pt-BR': { title: 'Você quer banir {user}?', description: 'Pressione o botão abaixo para continuar', userField: 'Nome de usuário', reasonField: 'Razão', noReason: 'Nenhuma razão fornecida' },
  'ro': { title: 'Doriți să interziceți {user}?', description: 'Apăsați butonul de mai jos pentru a continua', userField: 'Nume de utilizator', reasonField: 'Motiv', noReason: 'Niciun motiv furnizat' },
  'fi': { title: 'Haluatko kieltää {user}?', description: 'Paina alla olevaa painiketta jatkaaksesi', userField: 'Käyttäjätunnus', reasonField: 'Syy', noReason: 'Ei annettu syytä' },
  'sv-SE': { title: 'Vill du förbjuda {user}?', description: 'Tryck på knappen nedan för att fortsätta', userField: 'Användarnamn', reasonField: 'Anledning', noReason: 'Ingen anledning angiven' },
  'vi': { title: 'Bạn có muốn cấm {user} không?', description: 'Nhấn nút bên dưới để tiếp tục', userField: 'Tên người dùng', reasonField: 'Lý do', noReason: 'Không có lý do' },
  'tr': { title: '{user} yasaklamak istiyor musunuz?', description: 'Devam etmek için aşağıdaki düğmeye basın', userField: 'Kullanıcı adı', reasonField: 'Sebep', noReason: 'Sebep belirtilmemiş' },
  'cs': { title: 'Chcete zakázat {user}?', description: 'Pokračujte stisknutím tlačítka níže', userField: 'Uživatelské jméno', reasonField: 'Důvod', noReason: 'Žádný důvod' },
  'el': { title: 'Θέλετε να απαγορεύσετε τον {user};', description: 'Πατήστε το κουμπί παρακάτω για να συνεχίσετε', userField: 'Όνομα χρήστη', reasonField: 'Λόγος', noReason: 'Χωρίς αιτία' },
  'bg': { title: 'Искате ли да забраните {user}?', description: 'Натиснете бутона по-долу, за да продължите', userField: 'Потребителско име', reasonField: 'Причина', noReason: 'Няма предоставена причина' },
  'ru': { title: 'Вы хотите запретить {user}?', description: 'Нажмите кнопку ниже, чтобы продолжить', userField: 'Имя пользователя', reasonField: 'Причина', noReason: 'Причина не указана' },
  'uk': { title: 'Ви хочете заборонити {user}?', description: 'Натисніть кнопку нижче, щоб продовжити', userField: 'Ім\'я користувача', reasonField: 'Причина', noReason: 'Причина не вказана' },
  'hi': { title: 'क्या आप {user} को प्रतिबंधित करना चाहते हैं?', description: 'जारी रखने के लिए नीचे दिए गए बटन को दबाएँ', userField: 'उपयोगकर्ता नाम', reasonField: 'कारण', noReason: 'कोई कारण नहीं दिया गया' },
  'th': { title: 'คุณต้องการแบน {user} หรือไม่?', description: 'กดปุ่มด้านล่างเพื่อดำเนินการ', userField: 'ชื่อผู้ใช้', reasonField: 'เหตุผล', noReason: 'ไม่ได้ระบุเหตุผล' },
  'zh-CN': { title: '您想禁止 {user} 吗？', description: '按下面的按钮继续', userField: '用户名', reasonField: '原因', noReason: '没有提供理由' },
  'ja': { title: '{user} を禁止しますか？', description: '続行するには下のボタンを押してください', userField: 'ユーザー名', reasonField: '理由', noReason: '理由が提供されていません' },
  'zh-TW': { title: '您想禁止 {user} 嗎？', description: '按下面的按鈕繼續', userField: '用戶名', reasonField: '原因', noReason: '沒有提供理由' },
  'ko': { title: '{user}를 금지하시겠습니까?', description: '계속하려면 아래 버튼을 누르세요', userField: '사용자 이름', reasonField: '이유', noReason: '제공된 이유 없음' }
};
const confirm_kick_message: Record<Locale, { title: string, description: string, userField: string, reasonField: string, noReason: string }> = {
  'id': { title: 'Anda ingin mengeluarkan {user}?', description: 'Tekan tombol di bawah untuk melanjutkan', userField: 'Nama pengguna', reasonField: 'Alasan', noReason: 'Tidak ada alasan' },
  'da': { title: 'Vil du smide {user} ud?', description: 'Tryk på knappen nedenfor for at fortsætte', userField: 'Brugernavn', reasonField: 'Grund', noReason: 'Ingen grund angivet' },
  'de': { title: 'Möchten Sie {user} kicken?', description: 'Drücken Sie die Schaltfläche unten, um fortzufahren', userField: 'Benutzername', reasonField: 'Grund', noReason: 'Kein Grund angegeben' },
  'en-GB': { title: 'Do you want to kick {user}?', description: 'Press the button below to proceed', userField: 'Username', reasonField: 'Reason', noReason: 'No reason provided' },
  'en-US': { title: 'Do you want to kick {user}?', description: 'Press the button below to proceed', userField: 'Username', reasonField: 'Reason', noReason: 'No reason provided' },
  'es-ES': { title: '¿Quieres expulsar a {user}?', description: 'Presiona el botón de abajo para continuar', userField: 'Nombre de usuario', reasonField: 'Razón', noReason: 'No se proporcionó ninguna razón' },
  'es-419': { title: '¿Quieres expulsar a {user}?', description: 'Presiona el botón de abajo para continuar', userField: 'Nombre de usuario', reasonField: 'Razón', noReason: 'No se proporcionó ninguna razón' },
  'fr': { title: 'Voulez-vous expulser {user} ?', description: 'Appuyez sur le bouton ci-dessous pour continuer', userField: 'Nom d\'utilisateur', reasonField: 'Raison', noReason: 'Aucune raison fournie' },
  'hr': { title: 'Želite li izbaciti {user}?', description: 'Pritisnite gumb ispod za nastavak', userField: 'Korisničko ime', reasonField: 'Razlog', noReason: 'Nema razloga' },
  'it': { title: 'Vuoi espellere {user}?', description: 'Premi il pulsante qui sotto per procedere', userField: 'Nome utente', reasonField: 'Motivo', noReason: 'Nessun motivo fornito' },
  'lt': { title: 'Ar norite išmesti {user}?', description: 'Paspauskite žemiau esantį mygtuką, kad tęstumėte', userField: 'Vartotojo vardas', reasonField: 'Priežastis', noReason: 'Nėra nurodytos priežasties' },
  'hu': { title: 'Szeretnéd kirúgni {user}?', description: 'Nyomd meg a lenti gombot a folytatáshoz', userField: 'Felhasználónév', reasonField: 'Indok', noReason: 'Nincs megadott indok' },
  'nl': { title: 'Wil je {user} kicken?', description: 'Druk op de knop hieronder om door te gaan', userField: 'Gebruikersnaam', reasonField: 'Reden', noReason: 'Geen reden opgegeven' },
  'no': { title: 'Vil du kaste ut {user}?', description: 'Trykk på knappen nedenfor for å fortsette', userField: 'Brukernavn', reasonField: 'Grunn', noReason: 'Ingen grunn angitt' },
  'pl': { title: 'Czy chcesz wyrzucić {user}?', description: 'Naciśnij przycisk poniżej, aby kontynuować', userField: 'Nazwa użytkownika', reasonField: 'Powód', noReason: 'Nie podano powodu' },
  'pt-BR': { title: 'Você quer expulsar {user}?', description: 'Pressione o botão abaixo para continuar', userField: 'Nome de usuário', reasonField: 'Razão', noReason: 'Nenhuma razão fornecida' },
  'ro': { title: 'Doriți să excludeți {user}?', description: 'Apăsați butonul de mai jos pentru a continua', userField: 'Nume de utilizator', reasonField: 'Motiv', noReason: 'Niciun motiv furnizat' },
  'fi': { title: 'Haluatko potkaista {user}?', description: 'Paina alla olevaa painiketta jatkaaksesi', userField: 'Käyttäjätunnus', reasonField: 'Syy', noReason: 'Ei annettu syytä' },
  'sv-SE': { title: 'Vill du sparka {user}?', description: 'Tryck på knappen nedan för att fortsätta', userField: 'Användarnamn', reasonField: 'Anledning', noReason: 'Ingen anledning angiven' },
  'vi': { title: 'Bạn có muốn đá {user} không?', description: 'Nhấn nút bên dưới để tiếp tục', userField: 'Tên người dùng', reasonField: 'Lý do', noReason: 'Không có lý do' },
  'tr': { title: '{user} atmak istiyor musunuz?', description: 'Devam etmek için aşağıdaki düğmeye basın', userField: 'Kullanıcı adı', reasonField: 'Sebep', noReason: 'Sebep belirtilmemiş' },
  'cs': { title: 'Chcete vykopnout {user}?', description: 'Pokračujte stisknutím tlačítka níže', userField: 'Uživatelské jméno', reasonField: 'Důvod', noReason: 'Žádný důvod' },
  'el': { title: 'Θέλετε να αποβάλλετε τον {user};', description: 'Πατήστε το κουμπί παρακάτω για να συνεχίσετε', userField: 'Όνομα χρήστη', reasonField: 'Λόγος', noReason: 'Χωρίς αιτία' },
  'bg': { title: 'Искате ли да изгоните {user}?', description: 'Натиснете бутона по-долу, за да продължите', userField: 'Потребителско име', reasonField: 'Причина', noReason: 'Няма предоставена причина' },
  'ru': { title: 'Вы хотите выгнать {user}?', description: 'Нажмите кнопку ниже, чтобы продолжить', userField: 'Имя пользователя', reasonField: 'Причина', noReason: 'Причина не указана' },
  'uk': { title: 'Ви хочете вигнати {user}?', description: 'Натисніть кнопку нижче, щоб продовжити', userField: 'Ім\'я користувача', reasonField: 'Причина', noReason: 'Причина не вказана' },
  'hi': { title: 'क्या आप {user} को निकालना चाहते हैं?', description: 'जारी रखने के लिए नीचे दिए गए बटन को दबाएँ', userField: 'उपयोगकर्ता नाम', reasonField: 'कारण', noReason: 'कोई कारण नहीं दिया गया' },
  'th': { title: 'คุณต้องการเตะ {user} หรือไม่?', description: 'กดปุ่มด้านล่างเพื่อดำเนินการ', userField: 'ชื่อผู้ใช้', reasonField: 'เหตุผล', noReason: 'ไม่ได้ระบุเหตุผล' },
  'zh-CN': { title: '您想踢出 {user} 吗？', description: '按下面的按钮继续', userField: '用户名', reasonField: '原因', noReason: '没有提供理由' },
  'ja': { title: '{user} をキックしますか？', description: '続行するには下のボタンを押してください', userField: 'ユーザー名', reasonField: '理由', noReason: '理由が提供されていません' },
  'zh-TW': { title: '您想踢出 {user} 嗎？', description: '按下面的按鈕繼續', userField: '用戶名', reasonField: '原因', noReason: '沒有提供理由' },
  'ko': { title: '{user}를 추방하시겠습니까?', description: '계속하려면 아래 버튼을 누르세요', userField: '사용자 이름', reasonField: '이유', noReason: '제공된 이유 없음' }
};

if(interaction.isCommand()){
  
  const permis_admin_edit: Record<Locale, string> = {
    'th': 'คุณไม่มีสิทธิ์ `ผู้ดูแลระบบ` เพื่อที่จะแก้ไข',
    'id': 'Anda tidak punya hak. `Administrator` untuk memperbaikinya',
    'da': 'Du har ikke rettigheder. `Administrator` for at rette op',
    'de': 'Du hast keine Rechte. `Administrator` um es zu beheben',
    'en-GB': "You don't have rights. `Administrator` in order to fix",
    'en-US': "You don't have rights. `Administrator` in order to fix",
    'es-ES': 'No tienes derechos. `Administrador` para arreglar',
    'es-419': 'No tienes derechos. `Administrador` para arreglar',
    'fr': "Vous n'avez pas de droits. `Administrateur` afin de réparer",
    'hr': 'Nemate prava. `Administrator` za popravak',
    'it': 'Non hai diritti. `Administrator` per risolvere',
    'lt': 'Neturite teisių. `Administrator` kad pataisytumėte',
    'hu': 'Nincs joga. `Administrator` hogy kijavítsa',
    'nl': 'Je hebt geen rechten. `Administrator` om te herstellen',
    'no': 'Du har ikke rettigheter. `Administrator` for å rette opp',
    'pl': 'Nie masz praw. `Administrator` aby naprawić',
    'pt-BR': 'Você não tem direitos. `Administrator` para corrigir',
    'ro': 'Nu aveți drepturi. `Administrator` pentru a remedia',
    'fi': 'Sinulla ei ole oikeuksia. `Administrator` korjata',
    'sv-SE': 'Du har inga rättigheter. `Administrator` för att åtgärda',
    'vi': 'Bạn không có quyền. `Người quản lý` để khắc phục',
    'tr': 'Haklarınız yok. `Administrator` düzeltmek için',
    'cs': 'Nemáte práva. `Administrator` pro opravu',
    'el': 'Δεν έχετε δικαιώματα. `Administrator` για να διορθώσετε',
    'bg': 'Нямате права. `Administrator` за да поправите',
    'ru': 'У вас нет прав. `Administrator` чтобы исправить',
    'uk': 'У вас немає прав. `Administrator` щоб виправити',
    'hi': 'आपके पास अधिकार नहीं हैं। `Administrator` इसे ठीक करने के लिए',
    'zh-CN': '你沒有權利。 `行政人員` 為了修復',
    'ja': 'あなたには権利がありません。 `管理者` 直すために',
    'zh-TW': '你没有权利。 `行政人员` 为了修复',
    'ko': '당신에게는 권리가 없습니다. `관리자` 고치기 위해'
  };
  const cannotUseCommand: Record<Locale, string> = {
    'th': 'ไม่สามารถใช้คำสั่งที่นี่ได้',
    'id': 'Anda tidak punya hak untuk menggunakan perintah ini di sini.',
    'da': 'Denne kommando kan ikke bruges her.',
    'de': 'Dieser Befehl kann hier nicht verwendet werden.',
    'en-GB': "The command cannot be used here.",
    'en-US': "The command cannot be used here.",
    'es-ES': 'Este comando no se puede utilizar aquí.',
    'es-419': 'No se puede usar este comando aquí.',
    'fr': "La commande ne peut pas être utilisée ici.",
    'hr': 'Naredba se ne može koristiti ovdje.',
    'it': 'Il comando non può essere utilizzato qui.',
    'lt': 'Šią komandą negalima naudoti čia.',
    'hu': 'Ezt a parancsot nem lehet itt használni.',
    'nl': 'Dit commando kan hier niet worden gebruikt.',
    'no': 'Denne kommandoen kan ikke brukes her.',
    'pl': 'Tego polecenia nie można użyć tutaj.',
    'pt-BR': 'O comando não pode ser usado aqui.',
    'ro': 'Această comandă nu poate fi utilizată aici.',
    'fi': 'Tätä komentoa ei voi käyttää täällä.',
    'sv-SE': 'Kommandot kan inte användas här.',
    'vi': 'Lệnh không thể được sử dụng ở đây.',
    'tr': 'Bu komut burada kullanılamaz.',
    'cs': 'Tento příkaz nelze použít zde.',
    'el': 'Η εντολή δεν μπορεί να χρησιμοποιηθεί εδώ.',
    'bg': 'Командата не може да се използва тук.',
    'ru': 'Команда не может быть использована здесь.',
    'uk': 'Команда не може бути використана тут.',
    'hi': 'यहाँ कोई आदेश नहीं दिया जा सकता।',
    'zh-CN': '这个命令不能在这里使用。',
    'ja': 'このコマンドはここでは使用できません。',
    'zh-TW': '這個命令無法在這裡使用。',
    'ko': '이 명령은 여기에서 사용할 수 없습니다.'
  };

  if(interaction.commandName === 'prefix'){
    if (interaction.guild){
      if (config == undefined){
        const newConfig = this.guildConfigRepository.create({
        guildId: interaction.guild.id,
        });
        const savedConfig = await this.guildConfigRepository.save(newConfig);
        client.configs.set(interaction.guild.id, savedConfig);
        config = client.configs.get(interaction.guildId!);}
      if (interaction.options.get('prefix')?.value == undefined){
        if (interaction.locale == 'th'){await interaction.reply({ content: `Prefix ของเซิร์ฟเวอร์นี้คือ: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'zh-TW'){await interaction.reply({ content: `該伺服器的前綴是: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'ja'){await interaction.reply({ content: `このサーバーのプレフィックスは次のとおりです: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'zh-CN'){await interaction.reply({ content: `该服务器的前缀是: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'id'){await interaction.reply({ content: `Awalan untuk server ini adalah ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'da'){await interaction.reply({ content: `Præfikset for denne server er: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'de'){await interaction.reply({ content: `Präfix für diesen Server ist: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'es-ES'){await interaction.reply({ content: `El prefijo para este servidor es: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'fr'){await interaction.reply({ content: `Le préfixe de ce serveur est: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'hr'){await interaction.reply({ content: `Prefiks za ovaj poslužitelj je: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'it'){await interaction.reply({ content: `Il prefisso per questo server è: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'lt'){await interaction.reply({ content: `Šio serverio priešdėlis yra: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'hu'){await interaction.reply({ content: `Ennek a szervernek az előtagja: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'nl'){await interaction.reply({ content: `Het voorvoegsel voor deze server is: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'no'){await interaction.reply({ content: `Prefikset for denne serveren er: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'pl'){await interaction.reply({ content: `Prefiks tego serwera to: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'ro'){await interaction.reply({ content: `Prefixul pentru acest server este: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'el'){await interaction.reply({ content: `Το πρόθεμα για αυτόν τον διακομιστή είναι: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'sv-SE'){await interaction.reply({ content: `Prefixet för denna server är: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'vi'){await interaction.reply({ content: `Tiền tố cho máy chủ này là: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'tr'){await interaction.reply({ content: `Bu sunucunun öneki:: ${config?.prefix}`, ephemeral: true }); 
        } else if (interaction.locale == 'cs'){await interaction.reply({ content: `Předpona pro tento server je: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'bg'){await interaction.reply({ content: `Префиксът за този сървър е: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'ru'){await interaction.reply({ content: `Префикс для этого сервера: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'uk'){await interaction.reply({ content: `Префікс для цього сервера: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'hi'){await interaction.reply({ content: `इस सर्वर के लिए उपसर्ग है: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'ko'){await interaction.reply({ content: `이 서버의 접두사는 다음과 같습니다.: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'pt-BR'){await interaction.reply({ content: `O prefixo para este servidor é: ${config?.prefix}`, ephemeral: true });
        } else if (interaction.locale == 'fi'){await interaction.reply({ content: `Tämän palvelimen etuliite on: ${config?.prefix}`, ephemeral: true });
        } else await interaction.reply({ content: `The command prefix of this server is: ${config?.prefix}`, ephemeral: true });
      } else if (interaction.options.get('prefix')?.value != undefined && interaction.memberPermissions?.has('Administrator')) {
        const newPrefix = interaction.options.get('prefix')?.value?.toString();
        const updatePrefix = await this.guildConfigRepository.save({
          ...config,
          prefix: newPrefix,
        });
        client.configs.set(interaction.guildId!, updatePrefix)
        if (interaction.locale == 'th'){await interaction.reply({ content: `Prefix ถูกตั้งเป็น: ${newPrefix}`, ephemeral: true });
        } else await interaction.reply({ content: `The command prefix is set to: ${newPrefix}`, ephemeral: true });
      } else {
        const message = permis_admin_edit[interaction.locale] || "You don't have rights. `Administrator` in order to fix";
        await interaction.reply({ content: message, ephemeral: true });
        // if (interaction.locale == 'th'){await interaction.reply({ content: 'คุณไม่มีสิทธิ์ `Administrator` เพื่อที่จะแก้ไขCommandPrefix', ephemeral: true });
        // } else await interaction.reply({ content: "You don't have rights `Administrator` to edit Command Prefix", ephemeral: true });
      };
    } else {
      await interaction.reply({ content: cannotUseCommand[interaction.locale] || 'The command cannot be used here.', ephemeral: true })
    };
  } else if(interaction.commandName === 'welcome'){
    if (interaction.guild){
      if (config == undefined){
        const newConfig = this.guildConfigRepository.create({
        guildId: interaction.guild.id,
        });
        const savedConfig = await this.guildConfigRepository.save(newConfig);
        client.configs.set(interaction.guild.id, savedConfig);
        config = client.configs.get(interaction.guildId!);}
      if (interaction.memberPermissions?.has('Administrator')) {
        const Channel = interaction.options.get('channel')?.channel;
        const updateChannel = await this.guildConfigRepository.save({
          ...config,
          welcomeChannelId: Channel?.id,
        });
        client.configs.set(interaction.guildId!, updateChannel)
        if (interaction.locale == 'th'){await interaction.reply(`ตั้งค่าช่องยินดีต้อนรับแล้ว! ${Channel}`);
        } else if (interaction.locale == 'es-ES'){await interaction.reply(`El campo de bienvenida está configurado! es ${Channel}`);
        } else if (interaction.locale == 'en-US'){await interaction.reply(`Welcome channel set up! is ${Channel}`);
        } else if (interaction.locale == 'zh-CN'){await interaction.reply(`歡迎頻道設立！ 是 ${Channel}`);
        } else if (interaction.locale == 'ja'){await interaction.reply(`ようこそチャンネルが開設されました！ は ${Channel}`);
        } else if (interaction.locale == 'zh-TW'){await interaction.reply(`欢迎频道设立！ 是 ${Channel}`);
        } else if (interaction.locale == 'ko'){await interaction.reply(`환영 채널이 설정되었습니다! ~이다 ${Channel}`);
        } else if (interaction.locale == 'id'){await interaction.reply(`Saluran selamat datang telah disiapkan! adalah ${Channel}`);
        } else if (interaction.locale == 'da'){await interaction.reply(`Velkomstkanal oprettet! er ${Channel}`);
        } else if (interaction.locale == 'de'){await interaction.reply(`Willkommenskanal eingerichtet! Ist ${Channel}`);
        } else if (interaction.locale == 'fr'){await interaction.reply(`Chaîne de bienvenue créée ! est ${Channel}`);
        } else if (interaction.locale == 'vi'){await interaction.reply(`Chào mừng bạn đã thiết lập kênh! là ${Channel}`);
        } else await interaction.reply(`Welcome channel is set! in ${Channel}`);
      } else {
        const message = permis_admin_edit[interaction.locale] || "You don't have rights. `Administrator` to edit.";
        await interaction.reply({ content: message, ephemeral: true });
        // if (interaction.locale == 'th'){await interaction.reply({ content: 'คุณไม่มีสิทธิ์ `Administrator` เพื่อที่จะแก้ไข', ephemeral: true });
        // } else await interaction.reply({ content: "You don't have rights. `Administrator` to edit.", ephemeral: true });
      };
    } else {
      await interaction.reply({ content: cannotUseCommand[interaction.locale] || 'The command cannot be used here.', ephemeral: true })
    };
  } else if(interaction.commandName === 'log'){
    if (interaction.guild){
      if (config == undefined){
        const newConfig = this.guildConfigRepository.create({
        guildId: interaction.guild.id,
        });
        const savedConfig = await this.guildConfigRepository.save(newConfig);
        client.configs.set(interaction.guild.id, savedConfig);
        config = client.configs.get(interaction.guildId!);}
      if (interaction.memberPermissions?.has('Administrator')) {
        const Channel = interaction.options.get('channel')?.channel;
        const updateChannel = await this.guildConfigRepository.save({
          ...config,
          logChannelId: Channel?.id,
        });
        client.configs.set(interaction.guildId!, updateChannel)
        if (interaction.locale == 'th'){await interaction.reply(`ตั้งค่าช่องในการส่งบันทึกการตรวจสอบแล้ว! ${Channel}`);
        } else if (interaction.locale == 'es-ES'){await interaction.reply(`No tienes derechos. Administrador para arreglar ${Channel}`);
        } else if (interaction.locale == 'en-US'){await interaction.reply(`The channel for sending audit logs has been set! in ${Channel}`);
        } else if (interaction.locale == 'zh-CN'){await interaction.reply(`審計日誌發送通道已設定！ 在 ${Channel}`);
        } else if (interaction.locale == 'ja'){await interaction.reply(`監査ログを送信するチャネルが設定されました。 で ${Channel}`);
        } else if (interaction.locale == 'zh-TW'){await interaction.reply(`审计日志发送通道已设置！ 在 ${Channel}`);
        } else if (interaction.locale == 'ko'){await interaction.reply(`감사 로그 전송 채널이 설정되었습니다! ~에 ${Channel}`);
        } else if (interaction.locale == 'id'){await interaction.reply(`Saluran untuk mengirimkan log audit telah ditetapkan! di dalam ${Channel}`);
        } else if (interaction.locale == 'da'){await interaction.reply(`Kanalen til at sende revisionslogfiler er blevet indstillet! i ${Channel}`);
        } else if (interaction.locale == 'de'){await interaction.reply(`Der Kanal zum Senden von Audit-Logs wurde festgelegt! In ${Channel}`);
        } else if (interaction.locale == 'fr'){await interaction.reply(`Le canal d'envoi des journaux d'audit a été défini ! dans ${Channel}`);
        } else if (interaction.locale == 'vi'){await interaction.reply(`Kênh gửi nhật ký kiểm tra đã được thiết lập! TRONG ${Channel}`);
        } else await interaction.reply(`The channel for sending audit logs has been set! in ${Channel}`);
      } else {
        const message = permis_admin_edit[interaction.locale] || "You don't have rights. `Administrator` in order to fix";
        await interaction.reply({ content: message, ephemeral: true });
        // if (interaction.locale == 'th'){await interaction.reply({ content: 'คุณไม่มีสิทธิ์ `Administrator` เพื่อที่จะแก้ไข', ephemeral: true });
        // } else if (interaction.locale == 'es-ES'){await interaction.reply({ content: 'No tienes derechos. Administrador para arreglar', ephemeral: true });
        // } else if (interaction.locale == 'en-US'){await interaction.reply({ content: "You don't have rights. Administrator in order to fix", ephemeral: true });
        // } else if (interaction.locale == 'zh-CN'){await interaction.reply({ content: '你沒有權利。 行政人員 為了修復', ephemeral: true });
        // } else if (interaction.locale == 'ja'){await interaction.reply({ content: 'あなたには権利がありません。 管理者 直すために', ephemeral: true });
        // } else if (interaction.locale == 'zh-TW'){await interaction.reply({ content: '你没有权利。 行政人员 为了修复', ephemeral: true });
        // } else if (interaction.locale == 'ko'){await interaction.reply({ content: '당신에게는 권리가 없습니다. 관리자 고치기 위해', ephemeral: true });
        // } else if (interaction.locale == 'id'){await interaction.reply({ content: 'Anda tidak punya hak. Administrator untuk memperbaikinya', ephemeral: true });
        // } else if (interaction.locale == 'da'){await interaction.reply({ content: 'Du har ikke rettigheder. Administrator for at rette op', ephemeral: true });
        // } else if (interaction.locale == 'de'){await interaction.reply({ content: 'Du hast keine Rechte. Administrator um es zu beheben', ephemeral: true });
        // } else if (interaction.locale == 'fr'){await interaction.reply({ content: "Vous n'avez pas de droits. Administrateur afin de réparer", ephemeral: true });
        // } else if (interaction.locale == 'vi'){await interaction.reply({ content: 'Bạn không có quyền. Người quản lý để khắc phục', ephemeral: true });
        // } else await interaction.reply({ content: "You don't have rights. `Administrator` to edit.", ephemeral: true });
      };
    } else {
      await interaction.reply({ content: cannotUseCommand[interaction.locale] || 'The command cannot be used here.', ephemeral: true })
    };
  } else if(interaction.commandName === 'ping'){
    await interaction.reply('🏓 **Pong**!  <a:loading2:1231898437474193498>');
    let ping = Math.round(client.ws.ping);
    let loop = 0;
    do {if (ping < 0){
      loop++;
      await wait(1000);
      ping = Math.round(client.ws.ping);
    }} while(ping < 0 && loop < 30);
    await wait(ping * 2);
    if (ping >= 999){
      await interaction.editReply('🏓 **Pong**!  <a:loading:1211212089947979807>'+' `'+ping+'ms`');
    } else if (ping >= 501){
      await interaction.editReply('🏓 **Pong**!  <:ping3:1231145932436017213>'+' `'+ping+'ms`');
    } else if (ping >= 401 && ping <= 500){
      await interaction.editReply('🏓 **Pong**!  <:ping2:1231145930317762600>'+' `'+ping+'ms`');
    } else if (ping >= 251 && ping <= 400){
      await interaction.editReply('🏓 **Pong**!  <:ping1:1231145926710530130>'+' `'+ping+'ms`');
    } else if (ping >= 0 && ping <= 250){
      await interaction.editReply('🏓 **Pong**!  <:ping:1231145924898586685>'+' `'+ping+'ms`');
    } else if (ping == -1){await interaction.editReply('🏓 **Pong**!  Error to checking latency. Please try again.');
    } else {await interaction.editReply('🏓 **Pong**!  Error to checking latency. `'+ping+'ms`')}
  } else if(interaction.commandName === 'help'){
    if (interaction.locale == 'th') {
      const command = new ButtonBuilder()
        .setCustomId('commandList')
        .setLabel('รายการคำสั่ง')
        .setStyle(ButtonStyle.Secondary)
        // .setDisabled(true);
      const invite = new ButtonBuilder()
        .setLabel('เชิญบอท')
        .setURL('https://discord.com/oauth2/authorize?client_id=1210178730836893719')
        .setStyle(ButtonStyle.Link);
      const website = new ButtonBuilder()
        .setLabel('เว็บไซต์')
        .setURL('https://camming.xyz/')
        .setStyle(ButtonStyle.Link);
      const discord = new ButtonBuilder()
        .setLabel('ดิสคอร์ด')
        .setURL('https://discord.gg/brxPZB3Jzy')
        .setStyle(ButtonStyle.Link);
      const row = new ActionRowBuilder()
        .addComponents(command, invite, website, discord);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('**Camming Bot**')
        .setThumbnail(client.user?.avatarURL())
        .addFields(
          { name: 'Help & Support', value: 'เว็บไซต์ : https://camming.xyz/'+'\nดิสคอร์ด : [CammingSupport](https://discord.gg/brxPZB3Jzy)', inline: true },
          { name: 'เชิญ Camming BOT', value: '[Camming BETA](https://discord.com/oauth2/authorize?client_id=1210178730836893719)', inline: true },
          { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      if (interaction.guild){
        const config = client.configs.get(interaction.guildId!);
        helpEmbed.addFields(
          { name: 'เซิร์ฟเวอร์', value: interaction.guild?.name, inline: false },
          { name: 'คำนำหน้าคำสั่ง (prefix)', value: '**`'+config?.prefix+'`**', inline: false },
        )
      };
      await interaction.reply({ embeds: [helpEmbed], components: [row], ephemeral: true });
    } else {
      const command = new ButtonBuilder()
        .setCustomId('commandList')
        .setLabel('Command list')
        .setStyle(ButtonStyle.Secondary)
        // .setDisabled(true);
      const invite = new ButtonBuilder()
        .setLabel('invite bot')
        .setURL('https://discord.com/oauth2/authorize?client_id=1210178730836893719')
        .setStyle(ButtonStyle.Link);
      const website = new ButtonBuilder()
        .setLabel('website')
        .setURL('https://camming.xyz/')
        .setStyle(ButtonStyle.Link);
      const discord = new ButtonBuilder()
        .setLabel('discord')
        .setURL('https://discord.gg/brxPZB3Jzy')
        .setStyle(ButtonStyle.Link);
      const row = new ActionRowBuilder()
        .addComponents(command, invite, website, discord);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('**Camming Bot**')
        .setThumbnail(client.user?.avatarURL())
        .addFields(
          { name: 'Help & Support', value: 'Website : https://camming.xyz/'+'\nDiscord : [CammingSupport](https://discord.gg/brxPZB3Jzy)', inline: true },
          { name: 'Get Camming BOT', value: '[Camming BETA](https://discord.com/oauth2/authorize?client_id=1210178730836893719)', inline: true },
          { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      if (interaction.guild){
        const config = client.configs.get(interaction.guildId!);
        helpEmbed.addFields(
          { name: 'Server', value: interaction.guild?.name, inline: false },
          { name: 'Command prefix', value: '**`'+config?.prefix+'`**', inline: false },
        )
      };
      await interaction.reply({ embeds: [helpEmbed], components: [row], ephemeral: true });
    }
  } else if(interaction.commandName === 'ban'){
    if(interaction.guild){
      if (interaction.memberPermissions?.has('Administrator') || interaction.memberPermissions?.has('BanMembers')){
        if (interaction.appPermissions?.has('Administrator') || interaction.appPermissions?.has('BanMembers')){
          const confirmButtonLabel: Record<Locale, string> = {
            'id': 'Konfirmasi',
            'da': 'Bekræft',
            'de': 'Bestätigen',
            'en-GB': 'Confirm',
            'en-US': 'Confirm',
            'es-ES': 'Confirmar',
            'es-419': 'Confirmar',
            'fr': 'Confirmer',
            'hr': 'Potvrdi',
            'it': 'Conferma',
            'lt': 'Patvirtinti',
            'hu': 'Megerősít',
            'nl': 'Bevestigen',
            'no': 'Bekreft',
            'pl': 'Potwierdź',
            'pt-BR': 'Confirmar',
            'ro': 'Confirma',
            'fi': 'Vahvista',
            'sv-SE': 'Bekräfta',
            'vi': 'Xác nhận',
            'tr': 'Onayla',
            'cs': 'Potvrdit',
            'el': 'Επιβεβαίωση',
            'bg': 'Потвърди',
            'ru': 'Подтвердить',
            'uk': 'Підтвердити',
            'hi': 'पुष्टि',
            'th': 'ยืนยัน',
            'zh-CN': '确认',
            'ja': '確認',
            'zh-TW': '確認',
            'ko': '확인'
          };
          const cancelButtonLabel: Record<Locale, string> = {
            'id': 'Batalkan',
            'da': 'Annuller',
            'de': 'Abbrechen',
            'en-GB': 'Cancel',
            'en-US': 'Cancel',
            'es-ES': 'Cancelar',
            'es-419': 'Cancelar',
            'fr': 'Annuler',
            'hr': 'Otkaži',
            'it': 'Annulla',
            'lt': 'Atšaukti',
            'hu': 'Mégse',
            'nl': 'Annuleren',
            'no': 'Avbryt',
            'pl': 'Anuluj',
            'pt-BR': 'Cancelar',
            'ro': 'Anulați',
            'fi': 'Peruuta',
            'sv-SE': 'Avbryt',
            'vi': 'Hủy',
            'tr': 'İptal',
            'cs': 'Zrušit',
            'el': 'Ακύρωση',
            'bg': 'Отказ',
            'ru': 'Отмена',
            'uk': 'Скасувати',
            'hi': 'रद्द करें',
            'th': 'ยกเลิก',
            'zh-CN': '取消',
            'ja': 'キャンセル',
            'zh-TW': '取消',
            'ko': '취소'
          };
          const confirmButton = new ButtonBuilder()
            .setCustomId('confirm_ban')
            .setLabel(confirmButtonLabel[interaction.guildLocale || 'en-US'])
            .setStyle(ButtonStyle.Danger);

          const cancelButton = new ButtonBuilder()
            .setCustomId('cancel_ban')
            .setLabel(cancelButtonLabel[interaction.guildLocale || 'en-US'])
            .setStyle(ButtonStyle.Secondary);

          const row = new ActionRowBuilder()
            .addComponents(confirmButton, cancelButton);
          
          const messages = confirm_ban_message[interaction.guildLocale || 'en-US'];
          
          const userDisplayName = interaction.options.getUser('user')?.displayName;
          const title = userDisplayName ? messages.title.replace('{user}', userDisplayName) : messages.title;

          const confirm_embed = new EmbedBuilder()
            .setAuthor({ name: userDisplayName, iconURL: interaction.options.getUser('user')?.avatarURL() })
            .setTitle(title)
            .setDescription(messages.description)
            .setThumbnail(interaction.options.getUser('user')?.avatarURL())
            .addFields(
                { name: messages.userField, value: `<@${interaction.options.getUser('user')?.id}>` },
                { name: messages.reasonField, value: interaction.options.get('reason')?.value ?? messages.noReason },
                { name: '\u200B', value: '\u200B' },
            )
            .setColor(0xff4242)
            .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
            .setTimestamp();

          await interaction.reply({ embeds: [confirm_embed], components: [row] });
        
        } else await interaction.reply({ content: 'Command is Error!!', ephemeral: true })
      } else {
        const permis_banMessages: Record<Locale, string> = {
          'th': 'คุณไม่มีสิทธิ์ `แบนสมาชิก` เพื่อที่จะแบนสมาชิก',
          'id': 'Anda tidak punya hak untuk `melarang anggota` demi melarang anggota',
          'da': 'Du har ikke rettigheder til `forbyde medlem` for at forbyde medlem',
          'de': 'Du hast keine Rechte um `Mitglied zu verbannen` um Mitglied zu verbannen',
          'en-GB': "You don't have rights to `ban member` in order to ban member",
          'en-US': "You don't have rights to `ban member` in order to ban member",
          'es-ES': 'No tienes derechos para `prohibir miembro` para prohibir miembro',
          'es-419': 'No tienes derechos para `prohibir miembro` para prohibir miembro',
          'fr': "Vous n'avez pas de droits pour `bannir membre` afin de bannir membre",
          'hr': 'Nemate prava za `zabraniti člana` da zabranite člana',
          'it': 'Non hai diritti per `vietare membro` per vietare membro',
          'lt': 'Neturite teisių `uždrausti narį` kad uždraustumėte narį',
          'hu': 'Nincs joga `tagot kitiltani` hogy kitiltsa a tagot',
          'nl': 'Je hebt geen rechten om `lid te verbannen` om lid te verbannen',
          'no': 'Du har ikke rettigheter til å `forby medlem` for å forby medlem',
          'pl': 'Nie masz praw do `zakazać członka` aby zakazać członka',
          'pt-BR': 'Você não tem direitos para `banir membro` para banir membro',
          'ro': 'Nu aveți drepturi pentru a `interzice membru` pentru a interzice membru',
          'fi': 'Sinulla ei ole oikeuksia `kieltää jäsentä` jotta voit kieltää jäsentä',
          'sv-SE': 'Du har inga rättigheter att `förbjuda medlem` för att förbjuda medlem',
          'vi': 'Bạn không có quyền `cấm thành viên` để cấm thành viên',
          'tr': '`Üyeyi yasaklamak` için haklarınız yok',
          'cs': 'Nemáte práva `zakázat člena` pro zakázání člena',
          'el': 'Δεν έχετε δικαιώματα για `απαγόρευση μέλους` για να απαγορεύσετε μέλος',
          'bg': 'Нямате права да `забраните член` за да забраните член',
          'ru': 'У вас нет прав `запретить участника` чтобы запретить участника',
          'uk': 'У вас немає прав `заборонити учасника` щоб заборонити учасника',
          'hi': 'आपके पास अधिकार नहीं हैं `सदस्य को प्रतिबंधित करें` सदस्य को प्रतिबंधित करने के लिए',
          'zh-CN': '你没有权利 `禁止成员` 来禁止成员',
          'ja': 'あなたには `メンバーを禁止する` 権限がありません',
          'zh-TW': '你没有权利 `禁止成员` 来禁止成员',
          'ko': '당신에게는 `멤버를 금지할` 권리가 없습니다'
        };
        await interaction.reply({ content: permis_banMessages[interaction.locale || 'en-US'], ephemeral: true })
      };
    } else {
      await interaction.reply({ content: cannotUseCommand[interaction.locale || 'en-US'], ephemeral: true })
    };
  } else if(interaction.commandName === 'unban'){
    if(interaction.guild){
      if (interaction.memberPermissions?.has('Administrator') || interaction.memberPermissions?.has('BanMembers')){
        if (interaction.appPermissions?.has('Administrator') || interaction.appPermissions?.has('BanMembers')){
          const user = interaction.options.getUser('user');
          try {
            if(user !== null){await interaction.guild?.members.unban(user?.id)};
          } catch (error) {
            return;
          }
          const unban_message: Record<Locale, string> = {
            'id': '🛬 {user} berhasil dibuka blokir',
            'da': '🛬 {user} er blevet ophævet forbud',
            'de': '🛬 {user} wurde erfolgreich entbannt',
            'en-GB': '🛬 Successfully unbanned {user}',
            'en-US': '🛬 Successfully unbanned {user}',
            'es-ES': '🛬 {user} ha sido desbaneado exitosamente',
            'es-419': '🛬 {user} ha sido desbaneado exitosamente',
            'fr': '🛬 {user} a été débanni avec succès',
            'hr': '🛬 {user} je uspješno uklonjen s liste zabrana',
            'it': '🛬 {user} è stato sbannato con successo',
            'lt': '🛬 {user} buvo sėkmingai atbanintas',
            'hu': '🛬 {user} sikeresen feloldva a tiltás alól',
            'nl': '🛬 {user} is succesvol gedeblokkeerd',
            'no': '🛬 {user} ble fjernet fra blokkeringen',
            'pl': '🛬 {user} został pomyślnie odbanowany',
            'pt-BR': '🛬 {user} foi desbanido com sucesso',
            'ro': '🛬 {user} a fost deblocat cu succes',
            'fi': '🛬 {user} on poistettu estosta',
            'sv-SE': '🛬 {user} har blivit unbannad',
            'vi': '🛬 {user} đã được bỏ chặn thành công',
            'tr': '🛬 {user} başarıyla yasağı kaldırıldı',
            'cs': '🛬 {user} byl úspěšně odbanován',
            'el': '🛬 {user} αποκλείστηκε με επιτυχία',
            'bg': '🛬 {user} беше успешно разблокиран',
            'ru': '🛬 {user} успешно разблокирован',
            'uk': '🛬 {user} успішно розблоковано',
            'hi': '🛬 {user} को सफलतापूर्वक अनबैन कर दिया गया है',
            'th': '🛬 ปลดแบน {user} เรียบร้อยแล้ว',
            'zh-CN': '🛬 {user} 已成功解除封禁',
            'ja': '🛬 {user} の禁止が解除されました',
            'zh-TW': '🛬 {user} 已成功解除封鎖',
            'ko': '🛬 {user}의 차단이 해제되었습니다'
          };
          const userDisplayName = interaction.options.getUser('user')?.displayName;
          const title = userDisplayName ? unban_message[interaction.guildLocale || 'en-US'].replace('{user}', userDisplayName) : unban_message[interaction.guildLocale || 'en-US'];
          const embed = new EmbedBuilder()
            .setAuthor({ name: user?.username, iconURL: user?.avatarURL() })
            .setTitle(title)
            .setThumbnail(user?.avatarURL())
            .addFields({ name: '\u200B', value: '\u200B' })
            .setColor(0xff4242)
            .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
            .setTimestamp();
          await interaction.reply({ embeds: [embed] })
        } else await interaction.reply({ content: 'Command is Error!!', ephemeral: true })
      } else {
        const permis_unbanMessages: Record<Locale, string> = {
          'th': 'คุณไม่มีสิทธิ์ `แบนสมาชิก` เพื่อที่จะปลดแบนสมาชิก',
          'id': 'Anda tidak punya hak untuk `melarang anggota` demi membatalkan pelarangan anggota',
          'da': 'Du har ikke rettigheder til `forbyde medlem` for at ophæve forbuddet mod medlemmet',
          'de': 'Du hast keine Rechte um `Mitglied zu verbannen` um die Verbannung des Mitglieds aufzuheben',
          'en-GB': "You don't have rights to `ban member` in order to unban member",
          'en-US': "You don't have rights to `ban member` in order to unban member",
          'es-ES': 'No tienes derechos para `prohibir miembro` para levantar la prohibición del miembro',
          'es-419': 'No tienes derechos para `prohibir miembro` para levantar la prohibición del miembro',
          'fr': "Vous n'avez pas de droits pour `bannir membre` afin de lever la bannière du membre",
          'hr': 'Nemate prava za `zabraniti člana` da poništite zabranu člana',
          'it': 'Non hai diritti per `vietare membro` per annullare il divieto del membro',
          'lt': 'Neturite teisių `uždrausti narį` kad panaikintumėte nario draudimą',
          'hu': 'Nincs joga `tagot kitiltani` hogy feloldja a tag kitiltását',
          'nl': 'Je hebt geen rechten om `lid te verbannen` om het verbod van het lid op te heffen',
          'no': 'Du har ikke rettigheter til å `forby medlem` for å oppheve forbudet mot medlemmet',
          'pl': 'Nie masz praw do `zakazać członka` aby cofnąć zakaz członka',
          'pt-BR': 'Você não tem direitos para `banir membro` para desbloquear membro',
          'ro': 'Nu aveți drepturi pentru a `interzice membru` pentru a anula interdicția membrului',
          'fi': 'Sinulla ei ole oikeuksia `kieltää jäsentä` jotta voit kumota jäsenen kiellon',
          'sv-SE': 'Du har inga rättigheter att `förbjuda medlem` för att häva förbudet mot medlemmen',
          'vi': 'Bạn không có quyền `cấm thành viên` để bỏ cấm thành viên',
          'tr': '`Üyeyi yasaklamak` için haklarınız yok',
          'cs': 'Nemáte práva `zakázat člena` pro zrušení zákazu člena',
          'el': 'Δεν έχετε δικαιώματα για `απαγόρευση μέλους` για να αναιρέσετε την απαγόρευση του μέλους',
          'bg': 'Нямате права да `забраните член` за да отмените забраната на члена',
          'ru': 'У вас нет прав `запретить участника` чтобы снять запрет с участника',
          'uk': 'У вас немає прав `заборонити учасника` щоб зняти заборону з учасника',
          'hi': 'आपके पास अधिकार नहीं हैं `सदस्य को प्रतिबंधित करें` सदस्य पर से प्रतिबंध हटाने के लिए',
          'zh-CN': '你没有权利 `禁止成员` 来取消禁止成员',
          'ja': 'あなたには `メンバーを禁止する` 権限がありません',
          'zh-TW': '你没有权利 `禁止成员` 来取消禁止成员',
          'ko': '당신에게는 `멤버를 금지할` 권리가 없습니다'
        };
        await interaction.reply({ content: permis_unbanMessages[interaction.locale || 'en-US'], ephemeral: true })
      }
    } else {
      await interaction.reply({ content: cannotUseCommand[interaction.locale || 'en-US'], ephemeral: true })
    };
  } else if(interaction.commandName === 'test1'){
    const button = new ButtonBuilder()
      .setCustomId('test1')
      .setLabel('test1')
      .setStyle(ButtonStyle.Secondary)
    const row = new ActionRowBuilder()
      .addComponents(button)
    interaction.reply({ content: 'test1', components: [row] })
  } else if(interaction.commandName === 'kick'){
    if(interaction.guild){
      if (interaction.memberPermissions?.has('Administrator') || interaction.memberPermissions?.has('KickMembers')){
        if (interaction.appPermissions?.has('Administrator') || interaction.appPermissions?.has('KickMembers')){
          const confirmButtonLabel: Record<Locale, string> = {
            'id': 'Konfirmasi',
            'da': 'Bekræft',
            'de': 'Bestätigen',
            'en-GB': 'Confirm',
            'en-US': 'Confirm',
            'es-ES': 'Confirmar',
            'es-419': 'Confirmar',
            'fr': 'Confirmer',
            'hr': 'Potvrdi',
            'it': 'Conferma',
            'lt': 'Patvirtinti',
            'hu': 'Megerősít',
            'nl': 'Bevestigen',
            'no': 'Bekreft',
            'pl': 'Potwierdź',
            'pt-BR': 'Confirmar',
            'ro': 'Confirma',
            'fi': 'Vahvista',
            'sv-SE': 'Bekräfta',
            'vi': 'Xác nhận',
            'tr': 'Onayla',
            'cs': 'Potvrdit',
            'el': 'Επιβεβαίωση',
            'bg': 'Потвърди',
            'ru': 'Подтвердить',
            'uk': 'Підтвердити',
            'hi': 'पुष्टि',
            'th': 'ยืนยัน',
            'zh-CN': '确认',
            'ja': '確認',
            'zh-TW': '確認',
            'ko': '확인'
          };
          const cancelButtonLabel: Record<Locale, string> = {
            'id': 'Batalkan',
            'da': 'Annuller',
            'de': 'Abbrechen',
            'en-GB': 'Cancel',
            'en-US': 'Cancel',
            'es-ES': 'Cancelar',
            'es-419': 'Cancelar',
            'fr': 'Annuler',
            'hr': 'Otkaži',
            'it': 'Annulla',
            'lt': 'Atšaukti',
            'hu': 'Mégse',
            'nl': 'Annuleren',
            'no': 'Avbryt',
            'pl': 'Anuluj',
            'pt-BR': 'Cancelar',
            'ro': 'Anulați',
            'fi': 'Peruuta',
            'sv-SE': 'Avbryt',
            'vi': 'Hủy',
            'tr': 'İptal',
            'cs': 'Zrušit',
            'el': 'Ακύρωση',
            'bg': 'Отказ',
            'ru': 'Отмена',
            'uk': 'Скасувати',
            'hi': 'रद्द करें',
            'th': 'ยกเลิก',
            'zh-CN': '取消',
            'ja': 'キャンセル',
            'zh-TW': '取消',
            'ko': '취소'
          };
          const confirmButton = new ButtonBuilder()
            .setCustomId('confirm_kick')
            .setLabel(confirmButtonLabel[interaction.guildLocale || 'en-US'])
            .setStyle(ButtonStyle.Danger);
  
          const cancelButton = new ButtonBuilder()
            .setCustomId('cancel_kick')
            .setLabel(cancelButtonLabel[interaction.guildLocale || 'en-US'])
            .setStyle(ButtonStyle.Secondary);
  
          const row = new ActionRowBuilder()
            .addComponents(confirmButton, cancelButton);
          
          const messages = confirm_kick_message[interaction.guildLocale || 'en-US'];
          
          const userDisplayName = interaction.options.getUser('user')?.username;
          const title = userDisplayName ? messages.title.replace('{user}', userDisplayName) : messages.title;
  
          const confirm_embed = new EmbedBuilder()
            .setAuthor({ name: userDisplayName, iconURL: interaction.options.getUser('user')?.avatarURL() })
            .setTitle(title)
            .setDescription(messages.description)
            .setThumbnail(interaction.options.getUser('user')?.avatarURL())
            .addFields(
                { name: messages.userField, value: `<@${interaction.options.getUser('user')?.id}>` },
                { name: messages.reasonField, value: interaction.options.get('reason')?.value ?? messages.noReason },
                { name: '\u200B', value: '\u200B' },
            )
            .setColor(0xff4242)
            .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
            .setTimestamp();
  
          await interaction.reply({ embeds: [confirm_embed], components: [row] });
        
        } else await interaction.reply({ content: 'Command is Error!!', ephemeral: true })
      } else {
        const permis_kickMessages: Record<Locale, string> = {
          'th': 'คุณไม่มีสิทธิ์ `เตะสมาชิก` เพื่อที่จะเตะสมาชิก',
          'id': 'Anda tidak punya hak untuk `mengeluarkan anggota` demi mengeluarkan anggota',
          'da': 'Du har ikke rettigheder til `smide medlem ud` for at smide medlem ud',
          'de': 'Du hast keine Rechte um `Mitglied zu kicken` um Mitglied zu kicken',
          'en-GB': "You don't have rights to `kick member` in order to kick member",
          'en-US': "You don't have rights to `kick member` in order to kick member",
          'es-ES': 'No tienes derechos para `expulsar miembro` para expulsar miembro',
          'es-419': 'No tienes derechos para `expulsar miembro` para expulsar miembro',
          'fr': "Vous n'avez pas de droits pour `expulser membre` afin d'expulser membre",
          'hr': 'Nemate prava za `izbaciti člana` da izbacite člana',
          'it': 'Non hai diritti per `vietare membro` per vietare membro',
          'lt': 'Neturite teisių `išmesti narį` kad išmestumėte narį',
          'hu': 'Nincs joga `tagot kirúgni` hogy kirúgja a tagot',
          'nl': 'Je hebt geen rechten om `lid te kicken` om lid te kicken',
          'no': 'Du har ikke rettigheter til å `kaste ut medlem` for å kaste ut medlem',
          'pl': 'Nie masz praw do `wyrzucić członka` aby wyrzucić członka',
          'pt-BR': 'Você não tem direitos para `expulsar membro` para expulsar membro',
          'ro': 'Nu aveți drepturi pentru a `expulza membru` pentru a expulza membru',
          'fi': 'Sinulla ei ole oikeuksia `potkia jäsentä` jotta voit potkia jäsentä',
          'sv-SE': 'Du har inga rättigheter att `sparka medlem` för att sparka medlem',
          'vi': 'Bạn không có quyền `đá thành viên` để đá thành viên',
          'tr': '`Üyeyi atmak` için haklarınız yok',
          'cs': 'Nemáte práva `vykopnout člena` pro vykopnutí člena',
          'el': 'Δεν έχετε δικαιώματα για `να αποβάλλετε μέλος` για να αποβάλλετε μέλος',
          'bg': 'Нямате права да `изгоните член` за да изгоните член',
          'ru': 'У вас нет прав `выгнать участника` чтобы выгнать участника',
          'uk': 'У вас немає прав `вигнати учасника` щоб вигнати учасника',
          'hi': 'आपके पास अधिकार नहीं हैं `सदस्य को बाहर निकालें` सदस्य को बाहर निकालने के लिए',
          'zh-CN': '你没有权利 `踢成员` 来踢成员',
          'ja': 'あなたには `メンバーをキックする` 権限がありません',
          'zh-TW': '你没有权利 `踢成员` 来踢成员',
          'ko': '당신에게는 `멤버를 추방할` 권리가 없습니다'
        };
        await interaction.reply({ content: permis_kickMessages[interaction.locale || 'en-US'], ephemeral: true })
      };
    } else {
      const cannotUseCommand: Record<Locale, string> = {
        'th': 'คุณไม่สามารถใช้คำสั่งนี้นอกเซิร์ฟเวอร์ได้',
        'en-US': 'You cannot use this command outside of a server',
        'en-GB': 'You cannot use this command outside of a server',
        'id': 'Anda tidak bisa menggunakan perintah ini di luar server',
        'da': 'Du kan ikke bruge denne kommando uden for en server',
        'de': 'Sie können diesen Befehl außerhalb eines Servers nicht verwenden',
        'es-ES': 'No puedes usar este comando fuera de un servidor',
        'es-419': 'No puedes usar este comando fuera de un servidor',
        'fr': "Vous ne pouvez pas utiliser cette commande en dehors d'un serveur",
        'hr': 'Ne možete koristiti ovu naredbu izvan servera',
        'it': 'Non puoi usare questo comando al di fuori di un server',
        'lt': 'Negalite naudoti šios komandos ne serverio aplinkoje',
        'hu': 'Nem használhatja ezt a parancsot a szerveren kívül',
        'nl': 'Je kunt dit commando niet buiten een server gebruiken',
        'no': 'Du kan ikke bruke denne kommandoen utenfor en server',
        'pl': 'Nie możesz używać tej komendy poza serwerem',
        'pt-BR': 'Você não pode usar este comando fora de um servidor',
        'ro': 'Nu puteți utiliza această comandă în afara unui server',
        'fi': 'Et voi käyttää tätä komentoa palvelimen ulkopuolella',
        'sv-SE': 'Du kan inte använda detta kommando utanför en server',
        'vi': 'Bạn không thể sử dụng lệnh này ngoài máy chủ',
        'tr': 'Bu komutu bir sunucu dışında kullanamazsınız',
        'cs': 'Tento příkaz nelze použít mimo server',
        'el': 'Δεν μπορείτε να χρησιμοποιήσετε αυτήν την εντολή εκτός διακομιστή',
        'bg': 'Не можете да използвате тази команда извън сървър',
        'ru': 'Вы не можете использовать эту команду за пределами сервера',
        'uk': 'Ви не можете використовувати цю команду поза сервером',
        'hi': 'आप इस कमांड का उपयोग सर्वर के बाहर नहीं कर सकते',
        'zh-CN': '你不能在服务器外使用此命令',
        'ja': 'サーバーの外でこのコマンドを使用することはできません',
        'zh-TW': '你不能在伺服器外使用此命令',
        'ko': '서버 외부에서는 이 명령을 사용할 수 없습니다'
      };
      await interaction.reply({ content: cannotUseCommand[interaction.locale || 'en-US'], ephemeral: true })
    };
  }  


//  =======================  [ Button ]  =======================  \\


} else if(interaction.isButton()){
  if (interaction.customId === 'commandList') {
    if (interaction.locale == 'th') {
      const command_back = new ButtonBuilder()
        .setCustomId('commandList_back')
        .setLabel('ย้อนกลับ')
        .setEmoji('↩️')
        .setStyle(ButtonStyle.Secondary);
      const command = new ButtonBuilder()
        .setCustomId('commandList_general')
        .setLabel('ทั่วไป')
        .setStyle(ButtonStyle.Primary);
      const row = new ActionRowBuilder()
        .addComponents(command_back, command);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('**Camming Bot** รายการคำสั่ง')
        .setThumbnail(client.user?.avatarURL())
        .setDescription('โปรดเลือกหมวดหมู่ของคำสั่ง')
        .addFields({ name: '\u200B', value: '\u200B' })
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      await interaction.update({ embeds: [helpEmbed], components: [row] });
    } else {
      const command_back = new ButtonBuilder()
        .setCustomId('commandList_back')
        .setLabel('back')
        .setEmoji('↩️')
        .setStyle(ButtonStyle.Secondary);
      const command = new ButtonBuilder()
        .setCustomId('commandList_general')
        .setLabel('general')
        .setStyle(ButtonStyle.Primary);
      const row = new ActionRowBuilder()
        .addComponents(command_back, command);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('**Camming Bot** command list')
        .setThumbnail(client.user?.avatarURL())
        .setDescription('Please select a command category.')
        .addFields({ name: '\u200B', value: '\u200B' })
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      await interaction.update({ embeds: [helpEmbed], components: [row] });
    }
  } else if (interaction.customId === 'commandList_back') {
    if (interaction.locale == 'th') {
      const command = new ButtonBuilder()
        .setCustomId('commandList')
        .setLabel('รายการคำสั่ง')
        .setStyle(ButtonStyle.Secondary);
      const invite = new ButtonBuilder()
        .setLabel('เชิญบอท')
        .setURL('https://discord.com/oauth2/authorize?client_id=1210178730836893719')
        .setStyle(ButtonStyle.Link);
      const website = new ButtonBuilder()
        .setLabel('เว็บไซต์')
        .setURL('https://camming.xyz/')
        .setStyle(ButtonStyle.Link);
      const discord = new ButtonBuilder()
        .setLabel('ดิสคอร์ด')
        .setURL('https://discord.gg/brxPZB3Jzy')
        .setStyle(ButtonStyle.Link);
      const row = new ActionRowBuilder()
        .addComponents(command, invite, website, discord);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('**Camming Bot**')
        .setThumbnail(client.user?.avatarURL())
        .addFields(
          { name: 'Help & Support', value: 'เว็บไซต์ : https://camming.xyz/'+'\nดิสคอร์ด : [CammingSupport](https://discord.gg/brxPZB3Jzy)', inline: true },
          { name: 'เชิญ Camming BOT', value: '[Camming BETA](https://discord.com/oauth2/authorize?client_id=1210178730836893719)', inline: true },
          { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      if (interaction.guild){
        const config = client.configs.get(interaction.guildId!);
        helpEmbed.addFields(
          { name: 'เซิร์ฟเวอร์', value: interaction.guild?.name, inline: false },
          { name: 'คำนำหน้าคำสั่ง (prefix)', value: '**`'+config?.prefix+'`**', inline: false },
        )
      };
      await interaction.update({ embeds: [helpEmbed], components: [row] });
    } else {
      const command = new ButtonBuilder()
        .setCustomId('commandList')
        .setLabel('Command list')
        .setStyle(ButtonStyle.Secondary)
      const invite = new ButtonBuilder()
        .setLabel('invite bot')
        .setURL('https://discord.com/oauth2/authorize?client_id=1210178730836893719')
        .setStyle(ButtonStyle.Link);
      const website = new ButtonBuilder()
        .setLabel('website')
        .setURL('https://camming.xyz/')
        .setStyle(ButtonStyle.Link);
      const discord = new ButtonBuilder()
        .setLabel('discord')
        .setURL('https://discord.gg/brxPZB3Jzy')
        .setStyle(ButtonStyle.Link);
      const row = new ActionRowBuilder()
        .addComponents(command, invite, website, discord);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('Camming Bot')
        .setThumbnail(client.user?.avatarURL())
        .addFields(
          { name: 'Help & Support', value: 'Website : https://camming.xyz/'+'\nDiscord : [CammingSupport](https://discord.gg/brxPZB3Jzy)', inline: true },
          { name: 'Get Camming BOT', value: '[Camming BETA](https://discord.com/oauth2/authorize?client_id=1210178730836893719)', inline: true },
          { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      if (interaction.guild){
        const config = client.configs.get(interaction.guildId!);
        helpEmbed.addFields(
          { name: 'Server', value: interaction.guild?.name, inline: false },
          { name: 'Command prefix', value: '**`'+config?.prefix+'`**', inline: false },
        )
      };
      await interaction.update({ embeds: [helpEmbed], components: [row] });
    }
  } else if (interaction.customId === 'commandList_general') {
    if (interaction.locale == 'th') {
      const command_back = new ButtonBuilder()
        .setCustomId('commandList')
        .setLabel('ย้อนกลับ')
        .setEmoji('↩️')
        .setStyle(ButtonStyle.Secondary);
      const row = new ActionRowBuilder()
        .addComponents(command_back);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('**Camming Bot** รายการคำสั่ง')
        .setThumbnail(client.user?.avatarURL())
        .addFields({ name: '\u200B', value: '\u200B' })
        .addFields(
          { name: '/help', value: 'ข้อมูลบอทและรายการคำสั่ง' },
          { name: '/ping', value: 'ดูเวลาแฝงของบอท' },
          { name: '/prefix', value: 'ดูคำนำหน้าคำสั่ง' },
          // { name: '', value: '' },
        )
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      await interaction.update({ embeds: [helpEmbed], components: [row] });
    } else {
      const command_back = new ButtonBuilder()
        .setCustomId('commandList')
        .setLabel('back')
        .setEmoji('↩️')
        .setStyle(ButtonStyle.Secondary);
      const row = new ActionRowBuilder()
        .addComponents(command_back);
      const helpEmbed = new EmbedBuilder()
        .setColor(0xf91a1a)
        .setTitle('**Camming Bot** command list')
        .setThumbnail(client.user?.avatarURL())
        .addFields({ name: '\u200B', value: '\u200B' })
        .addFields(
          { name: '/help', value: 'Bot info & Commands.' },
          { name: '/ping', value: 'See the latency of the bot.' },
          { name: '/prefix', value: 'See the command prefix.' },
          // { name: '', value: '' },
        )
        .setTimestamp()
        .setFooter({ text: client.user?.username, iconURL: client.user?.avatarURL() });
      await interaction.update({ embeds: [helpEmbed], components: [row] });
    }
  } else if (interaction.customId === 'confirm_ban') {
    if(interaction.memberPermissions?.has('Administrator') || interaction.memberPermissions?.has('BanMembers')){
      const successMessages: Record<Locale, { title: string, userField: string, reasonField: string, noReason: string }> = {
        'id': { title: '🛫 Melarang {user} Berhasil', userField: 'Nama Pengguna', reasonField: 'Alasan', noReason: 'Tidak Ada Alasan' },
        'da': { title: '🛫 Ban {user} Lykkedes', userField: 'Brugernavn', reasonField: 'Grund', noReason: 'Ingen Grund Angivet' },
        'de': { title: '🛫 {user} erfolgreich verbannt', userField: 'Benutzername', reasonField: 'Grund', noReason: 'Kein Grund Angegeben' },
        'en-GB': { title: '🛫 Banned {user} Successfully', userField: 'Username', reasonField: 'Reason', noReason: 'No Reason Specified' },
        'en-US': { title: '🛫 Banned {user} Successfully', userField: 'Username', reasonField: 'Reason', noReason: 'No Reason Specified' },
        'es-ES': { title: '🛫 Prohibido {user} Exitosamente', userField: 'Nombre de Usuario', reasonField: 'Razón', noReason: 'Sin Razón Especificada' },
        'es-419': { title: '🛫 Prohibido {user} Exitosamente', userField: 'Nombre de Usuario', reasonField: 'Razón', noReason: 'Sin Razón Especificada' },
        'fr': { title: '🛫 Interdiction de {user} Réussie', userField: 'Nom d\'Utilisateur', reasonField: 'Raison', noReason: 'Aucune Raison Spécifiée' },
        'hr': { title: '🛫 Zabrana {user} Uspješna', userField: 'Korisničko Ime', reasonField: 'Razlog', noReason: 'Nema Navedenog Razloga' },
        'it': { title: '🛫 Vietato {user} con Successo', userField: 'Nome Utente', reasonField: 'Motivo', noReason: 'Nessun Motivo Specificato' },
        'lt': { title: '🛫 Draudimas {user} Sėkmingas', userField: 'Vartotojo Vardas', reasonField: 'Priežastis', noReason: 'Nenurodyta Priežastis' },
        'hu': { title: '🛫 {user} Sikeresen Kitiltva', userField: 'Felhasználónév', reasonField: 'Ok', noReason: 'Nincs Megadva Ok' },
        'nl': { title: '🛫 Verbanning {user} Succesvol', userField: 'Gebruikersnaam', reasonField: 'Reden', noReason: 'Geen Reden Opgegeven' },
        'no': { title: '🛫 Forbudt {user} Vellykket', userField: 'Brukernavn', reasonField: 'Årsak', noReason: 'Ingen Angitt Årsak' },
        'pl': { title: '🛫 Zbanowany {user} Pomyślnie', userField: 'Nazwa Użytkownika', reasonField: 'Powód', noReason: 'Nie Podano Powodu' },
        'pt-BR': { title: '🛫 Banido {user} Com Sucesso', userField: 'Nome de Usuário', reasonField: 'Motivo', noReason: 'Nenhum Motivo Especificado' },
        'ro': { title: '🛫 Interzis {user} cu Succes', userField: 'Nume Utilizator', reasonField: 'Motiv', noReason: 'Niciun Motiv Specificat' },
        'fi': { title: '🛫 Kielto {user} Onnistui', userField: 'Käyttäjänimi', reasonField: 'Syy', noReason: 'Ei Määriteltyä Syytä' },
        'sv-SE': { title: '🛫 Bannlyst {user} Framgångsrikt', userField: 'Användarnamn', reasonField: 'Orsak', noReason: 'Ingen Angiven Orsak' },
        'vi': { title: '🛫 Cấm {user} Thành Công', userField: 'Tên Người Dùng', reasonField: 'Lý Do', noReason: 'Không Có Lý Do Được Chỉ Định' },
        'tr': { title: '🛫 {user} Başarıyla Yasaklandı', userField: 'Kullanıcı Adı', reasonField: 'Neden', noReason: 'Belirtilen Neden Yok' },
        'cs': { title: '🛫 Zákaz {user} Úspěšný', userField: 'Uživatelské Jméno', reasonField: 'Důvod', noReason: 'Není Uveden Důvod' },
        'el': { title: '🛫 Απαγόρευση {user} Επιτυχής', userField: 'Όνομα Χρήστη', reasonField: 'Λόγος', noReason: 'Δεν Έχει Καθοριστεί Λόγος' },
        'bg': { title: '🛫 Забрана {user} Успешна', userField: 'Потребителско Име', reasonField: 'Причина', noReason: 'Не Е Посочена Причина' },
        'ru': { title: '🛫 Запрещено {user} Успешно', userField: 'Имя Пользователя', reasonField: 'Причина', noReason: 'Причина Не Указана' },
        'uk': { title: '🛫 Заборонено {user} Успішно', userField: 'Ім\'я Користувача', reasonField: 'Причина', noReason: 'Причина Не Вказана' },
        'hi': { title: '🛫 {user} को सफलतापूर्वक प्रतिबंधित किया गया', userField: 'उपयोगकर्ता नाम', reasonField: 'कारण', noReason: 'कोई कारण निर्दिष्ट नहीं किया गया' },
        'th': { title: '🛫 แบน {user} สำเร็จ', userField: 'ชื่อผู้ใช้', reasonField: 'เหตุผล', noReason: 'ไม่ได้ระบุเหตุผล' },
        'zh-CN': { title: '🛫 成功封禁 {user}', userField: '用户名', reasonField: '原因', noReason: '未指定原因' },
        'ja': { title: '🛫 {user} が正常に禁止されました', userField: 'ユーザー名', reasonField: '理由', noReason: '指定された理由はありません' },
        'zh-TW': { title: '🛫 成功封鎖 {user}', userField: '用戶名', reasonField: '原因', noReason: '未指定原因' },
        'ko': { title: '🛫 {user} 차단 성공', userField: '사용자 이름', reasonField: '이유', noReason: '이유를 지정하지 않음' }
      };
      const banFailureMessages: Record<Locale, { title: string, description: string }> = {
        'id': { title: '😥 Gagal melarang {user}', description: 'Pengguna yang ingin Anda larang mungkin memiliki posisi lebih tinggi dari bot atau mungkin tidak berada di server ini' },
        'da': { title: '😥 Kunne ikke banne {user}', description: 'Brugeren, du vil banne, kan have en højere rolle end botten eller muligvis ikke være i denne server' },
        'de': { title: '😥 Bann von {user} fehlgeschlagen', description: 'Der zu bannende Benutzer hat möglicherweise eine höhere Position als der Bot oder ist möglicherweise nicht auf diesem Server' },
        'en-GB': { title: '😥 Failed to ban {user}', description: 'The user you are trying to ban may have a higher role than the bot or may not be in this server' },
        'en-US': { title: '😥 Failed to ban {user}', description: 'The user you are trying to ban may have a higher role than the bot or may not be in this server' },
        'es-ES': { title: '😥 No se pudo banear a {user}', description: 'El usuario que estás intentando banear puede tener un rol superior al bot o puede que no esté en este servidor' },
        'es-419': { title: '😥 No se pudo banear a {user}', description: 'El usuario que estás intentando banear puede tener un rol superior al bot o puede que no esté en este servidor' },
        'fr': { title: '😥 Impossible de bannir {user}', description: 'L\'utilisateur que vous essayez de bannir peut avoir un rôle supérieur au bot ou ne pas être dans ce serveur' },
        'hr': { title: '😥 Neuspješno baniranje {user}', description: 'Korisnik kojeg pokušavate banirati možda ima višu ulogu od bota ili možda nije na ovom serveru' },
        'it': { title: '😥 Impossibile bannare {user}', description: 'L\'utente che stai cercando di bannare potrebbe avere un ruolo superiore al bot o potrebbe non essere in questo server' },
        'lt': { title: '😥 Nepavyko užblokuoti {user}', description: 'Vartotojas, kurį bandote užblokuoti, gali turėti aukštesnį vaidmenį nei botas arba gali nebūti šiame serveryje' },
        'hu': { title: '😥 Nem sikerült kitiltani {user}', description: 'A felhasználó, akit kitiltani próbálsz, lehet, hogy magasabb szerepköre van, mint a botnak, vagy lehet, hogy nincs ezen a szerveren' },
        'nl': { title: '😥 Niet gelukt om {user} te verbannen', description: 'De gebruiker die je probeert te verbannen, heeft mogelijk een hogere rol dan de bot of is mogelijk niet in deze server' },
        'no': { title: '😥 Klarte ikke å utestenge {user}', description: 'Brukeren du prøver å utestenge, kan ha en høyere rolle enn boten eller kan være utenfor denne serveren' },
        'pl': { title: '😥 Nie udało się zbanować {user}', description: 'Użytkownik, którego próbujesz zbanować, może mieć wyższą rolę niż bot lub może nie być na tym serwerze' },
        'pt-BR': { title: '😥 Falha ao banir {user}', description: 'O usuário que você está tentando banir pode ter um papel mais alto que o bot ou pode não estar neste servidor' },
        'ro': { title: '😥 Nu a reușit să interzică {user}', description: 'Utilizatorul pe care încerci să-l interzici poate avea un rol mai înalt decât botul sau poate nu este în acest server' },
        'fi': { title: '😥 Käyttäjän {user} porttikielto epäonnistui', description: 'Käyttäjä, jota yrität estää, saattaa olla korkeammassa asemassa kuin botti tai ei välttämättä ole tällä palvelimella' },
        'sv-SE': { title: '😥 Misslyckades med att banna {user}', description: 'Användaren du försöker banna kan ha en högre roll än boten eller kanske inte är i den här servern' },
        'vi': { title: '😥 Không thể cấm {user}', description: 'Người dùng bạn đang cố gắng cấm có thể có vai trò cao hơn bot hoặc có thể không có trong máy chủ này' },
        'tr': { title: '😥 {user} yasaklanamadı', description: 'Yasaklamaya çalıştığınız kullanıcı, bottan daha yüksek bir role sahip olabilir veya bu sunucuda olmayabilir' },
        'cs': { title: '😥 Nepodařilo se zabanovat {user}', description: 'Uživatel, kterého se pokoušíte zabanovat, může mít vyšší roli než bot nebo nemusí být na tomto serveru' },
        'el': { title: '😥 Αποτυχία απαγόρευσης {user}', description: 'Ο χρήστης που προσπαθείτε να απαγορεύσετε μπορεί να έχει υψηλότερο ρόλο από το bot ή να μην βρίσκεται σε αυτόν τον διακομιστή' },
        'bg': { title: '😥 Неуспешно забраняване на {user}', description: 'Потребителят, когото се опитвате да забраните, може да има по-висока роля от бота или може да не е в този сървър' },
        'ru': { title: '😥 Не удалось забанить {user}', description: 'Пользователь, которого вы пытаетесь забанить, может иметь более высокую роль, чем бот, или может отсутствовать на этом сервере' },
        'uk': { title: '😥 Не вдалося забанити {user}', description: 'Користувач, якого ви намагаєтесь забанити, може мати вищу роль, ніж бот, або може бути відсутнім на цьому сервері' },
        'hi': { title: '😥 {user} को बैन करने में विफल', description: 'जिस उपयोगकर्ता को आप बैन करने का प्रयास कर रहे हैं, वह बॉट से उच्च भूमिका वाला हो सकता है या हो सकता है कि वह इस सर्वर में नहीं है' },
        'th': { title: '😥 แบน {user} ไม่สำเร็จ', description: 'ผู้ใช้ที่ต้องการแบนอาจตำแหน่งสูงกว่าบอท หรืออาจไม่ได้อยู่ในเซิร์ฟเวอร์นี้' },
        'zh-CN': { title: '😥 未能禁用 {user}', description: '您试图禁用的用户可能拥有比机器人更高的角色或可能不在此服务器中' },
        'ja': { title: '😥 {user} を禁止できませんでした', description: '禁止しようとしているユーザーは、ボットより高い役割を持っているか、このサーバーに存在しない可能性があります' },
        'zh-TW': { title: '😥 無法禁止 {user}', description: '您嘗試禁止的用戶可能擁有比機器人更高的角色，或可能不在此伺服器中' },
        'ko': { title: '😥 {user} 을(를) 차단하지 못했습니다', description: '차단하려는 사용자가 봇보다 높은 역할을 가지고 있거나 이 서버에 없을 수 있습니다' },
      };
      
      const userIdMatch = interaction.message.embeds[0].fields[0].value.match(/<@!?(\d+)>/);
      if (!userIdMatch) {
        await interaction.reply({ content: 'User not found!', ephemeral: true });
        await wait(10_000);
        const message = await interaction.fetchReply();
        await message.delete();
        return;
      };
      const userId = userIdMatch[1];
      const user = interaction.guild?.members.cache.get(userId);
  
      const messages_successMessages = successMessages[interaction.guildLocale || 'en-US'];
      const messages_banFailureMessages = banFailureMessages[interaction.guildLocale || 'en-US'];
    
      const userDisplayName = user?.displayName;
  
      try {
        if(interaction.message.embeds[0].fields[1].value != messages_successMessages.noReason){
          const reason = interaction.message.embeds[0].fields[1].value
          await user?.ban({ reason: reason });
        } else await user?.ban();
      } catch (error) {
        const embed = new EmbedBuilder()
          .setAuthor({ name: userDisplayName, iconURL: user?.displayAvatarURL() })
          .setTitle(userDisplayName ? messages_banFailureMessages.title.replace('{user}', userDisplayName) : messages_banFailureMessages.title)
          .setThumbnail(user?.displayAvatarURL())
          .setDescription(messages_banFailureMessages.description)
          .addFields(
            { name: messages_successMessages.userField, value: `<@${user?.id}>  `+'(`'+user?.id+'`)' },
            { name: messages_successMessages.reasonField, value: interaction.message.embeds[0].fields[1].value ?? messages_successMessages.noReason },
            { name: '\u200B', value: '\u200B' },
          )
          .setColor(0xff4242)
          .setFooter({ text: interaction.guild?.name, iconURL: interaction.guild?.iconURL() })
          .setTimestamp();
        await interaction.update({ embeds: [embed], components: [] })
        await wait(20_000);
        const message = await interaction.fetchReply();
        await message.delete();
        return;
      };
  
      const success_embed = new EmbedBuilder()
        .setAuthor({ name: userDisplayName, iconURL: user?.displayAvatarURL() })
        .setTitle(userDisplayName ? messages_successMessages.title.replace('{user}', userDisplayName) : messages_successMessages.title)
        .setThumbnail(user?.displayAvatarURL())
        .addFields(
            { name: messages_successMessages.userField, value: `<@${user?.id}>  `+'(`'+user?.id+'`)' },
            { name: messages_successMessages.reasonField, value: interaction.message.embeds[0].fields[1].value ?? messages_successMessages.noReason },
            { name: '\u200B', value: '\u200B' },
        )
        .setColor(0xff4242)
        .setFooter({ text: interaction.guild?.name, iconURL: interaction.guild?.iconURL() })
        .setTimestamp();
  
      await interaction.update({ embeds: [success_embed], components: [] });
    } else {
      const permis_banMessages: Record<Locale, string> = {
        'th': 'คุณไม่มีสิทธิ์ `แบนสมาชิก` เพื่อที่จะแบนสมาชิก',
        'id': 'Anda tidak punya hak untuk `melarang anggota` demi melarang anggota',
        'da': 'Du har ikke rettigheder til `forbyde medlem` for at forbyde medlem',
        'de': 'Du hast keine Rechte um `Mitglied zu verbannen` um Mitglied zu verbannen',
        'en-GB': "You don't have rights to `ban member` in order to ban member",
        'en-US': "You don't have rights to `ban member` in order to ban member",
        'es-ES': 'No tienes derechos para `prohibir miembro` para prohibir miembro',
        'es-419': 'No tienes derechos para `prohibir miembro` para prohibir miembro',
        'fr': "Vous n'avez pas de droits pour `bannir membre` afin de bannir membre",
        'hr': 'Nemate prava za `zabraniti člana` da zabranite člana',
        'it': 'Non hai diritti per `vietare membro` per vietare membro',
        'lt': 'Neturite teisių `uždrausti narį` kad uždraustumėte narį',
        'hu': 'Nincs joga `tagot kitiltani` hogy kitiltsa a tagot',
        'nl': 'Je hebt geen rechten om `lid te verbannen` om lid te verbannen',
        'no': 'Du har ikke rettigheter til å `forby medlem` for å forby medlem',
        'pl': 'Nie masz praw do `zakazać członka` aby zakazać członka',
        'pt-BR': 'Você não tem direitos para `banir membro` para banir membro',
        'ro': 'Nu aveți drepturi pentru a `interzice membru` pentru a interzice membru',
        'fi': 'Sinulla ei ole oikeuksia `kieltää jäsentä` jotta voit kieltää jäsentä',
        'sv-SE': 'Du har inga rättigheter att `förbjuda medlem` för att förbjuda medlem',
        'vi': 'Bạn không có quyền `cấm thành viên` để cấm thành viên',
        'tr': '`Üyeyi yasaklamak` için haklarınız yok',
        'cs': 'Nemáte práva `zakázat člena` pro zakázání člena',
        'el': 'Δεν έχετε δικαιώματα για `απαγόρευση μέλους` για να απαγορεύσετε μέλος',
        'bg': 'Нямате права да `забраните член` за да забраните член',
        'ru': 'У вас нет прав `запретить участника` чтобы запретить участника',
        'uk': 'У вас немає прав `заборонити учасника` щоб заборонити учасника',
        'hi': 'आपके पास अधिकार नहीं हैं `सदस्य को प्रतिबंधित करें` सदस्य को प्रतिबंधित करने के लिए',
        'zh-CN': '你没有权利 `禁止成员` 来禁止成员',
        'ja': 'あなたには `メンバーを禁止する` 権限がありません',
        'zh-TW': '你没有权利 `禁止成员` 来禁止成员',
        'ko': '당신에게는 `멤버를 금지할` 권리가 없습니다'
      };
      await interaction.reply({ content: permis_banMessages[interaction.locale || 'en-US'], ephemeral: true })
    }
  } else if (interaction.customId === 'cancel_ban') {
    const userIdMatch = interaction.message.embeds[0].fields[0].value.match(/<@!?(\d+)>/);
    if (!userIdMatch) {
      await interaction.reply({ content: 'User not found!', ephemeral: true });
      await wait(10_000);
      const message = await interaction.fetchReply();
      await message.delete();
      return;
    };
    const userId = userIdMatch[1];
    const user = interaction.guild?.members.cache.get(userId);

    const userDisplayName = user?.displayName;

    const embed = new EmbedBuilder()
      .setAuthor({ name: userDisplayName, iconURL: user?.displayAvatarURL() })
      .setTitle('ยกเลิกการแบนแล้ว')
      .setThumbnail(user?.displayAvatarURL())
      .addFields({ name: '\u200B', value: '\u200B' })
      .setColor(0xff4242)
      .setFooter({ text: interaction.guild?.name, iconURL: interaction.guild?.iconURL() })
      .setTimestamp();
    await interaction.update({ embeds: [embed], components: [] })
    await wait(10_000)
    const message = await interaction.fetchReply()
    await message.delete();
  } else if (interaction.customId === 'confirm_kick') {
    if (interaction.memberPermissions?.has('Administrator') || interaction.memberPermissions?.has('KickMembers')) {
      const successMessages: Record<Locale, { title: string, userField: string, reasonField: string, noReason: string }> = {
        'id': { title: '👋 Mengeluarkan {user} Berhasil', userField: 'Nama Pengguna', reasonField: 'Alasan', noReason: 'Tidak Ada Alasan' },
        'da': { title: '👋 Udmeldelse af {user} Lykkedes', userField: 'Brugernavn', reasonField: 'Grund', noReason: 'Ingen Grund Angivet' },
        'de': { title: '👋 {user} erfolgreich gekickt', userField: 'Benutzername', reasonField: 'Grund', noReason: 'Kein Grund Angegeben' },
        'en-GB': { title: '👋 Kicked {user} Successfully', userField: 'Username', reasonField: 'Reason', noReason: 'No Reason Specified' },
        'en-US': { title: '👋 Kicked {user} Successfully', userField: 'Username', reasonField: 'Reason', noReason: 'No Reason Specified' },
        'es-ES': { title: '👋 Expulsado {user} Exitosamente', userField: 'Nombre de Usuario', reasonField: 'Razón', noReason: 'Sin Razón Especificada' },
        'es-419': { title: '👋 Expulsado {user} Exitosamente', userField: 'Nombre de Usuario', reasonField: 'Razón', noReason: 'Sin Razón Especificada' },
        'fr': { title: '👋 Expulsion de {user} Réussie', userField: 'Nom d\'Utilisateur', reasonField: 'Raison', noReason: 'Aucune Raison Spécifiée' },
        'hr': { title: '👋 Ispuštanje {user} Uspješno', userField: 'Korisničko Ime', reasonField: 'Razlog', noReason: 'Nema Navedenog Razloga' },
        'it': { title: '👋 {user} Espulso con Successo', userField: 'Nome Utente', reasonField: 'Motivo', noReason: 'Nessun Motivo Specificato' },
        'lt': { title: '👋 {user} Išmestas Sėkmingai', userField: 'Vartotojo Vardas', reasonField: 'Priežastis', noReason: 'Nenurodyta Priežastis' },
        'hu': { title: '👋 {user} Sikeresen Kirúgva', userField: 'Felhasználónév', reasonField: 'Ok', noReason: 'Nincs Megadva Ok' },
        'nl': { title: '👋 {user} Succesvol Verwijderd', userField: 'Gebruikersnaam', reasonField: 'Reden', noReason: 'Geen Reden Opgegeven' },
        'no': { title: '👋 Utestengt {user} Vellykket', userField: 'Brukernavn', reasonField: 'Årsak', noReason: 'Ingen Angitt Årsak' },
        'pl': { title: '👋 {user} Pomyślnie Wyrzucony', userField: 'Nazwa Użytkownika', reasonField: 'Powód', noReason: 'Nie Podano Powodu' },
        'pt-BR': { title: '👋 {user} Removido com Sucesso', userField: 'Nome de Usuário', reasonField: 'Motivo', noReason: 'Nenhum Motivo Especificado' },
        'ro': { title: '👋 {user} Îndepărtat cu Succes', userField: 'Nume Utilizator', reasonField: 'Motiv', noReason: 'Niciun Motiv Specificat' },
        'fi': { title: '👋 {user} Poistettu Onnistuneesti', userField: 'Käyttäjänimi', reasonField: 'Syy', noReason: 'Ei Määriteltyä Syytä' },
        'sv-SE': { title: '👋 {user} Framgångsrikt Utkastad', userField: 'Användarnamn', reasonField: 'Orsak', noReason: 'Ingen Angiven Orsak' },
        'vi': { title: '👋 {user} Đã Bị Kicked Thành Công', userField: 'Tên Người Dùng', reasonField: 'Lý Do', noReason: 'Không Có Lý Do Được Chỉ Định' },
        'tr': { title: '👋 {user} Başarıyla Atıldı', userField: 'Kullanıcı Adı', reasonField: 'Neden', noReason: 'Belirtilen Neden Yok' },
        'cs': { title: '👋 {user} Úspěšně Vykopnut', userField: 'Uživatelské Jméno', reasonField: 'Důvod', noReason: 'Není Uveden Důvod' },
        'el': { title: '👋 {user} Απελάθηκε Επιτυχώς', userField: 'Όνομα Χρήστη', reasonField: 'Λόγος', noReason: 'Δεν Έχει Καθοριστεί Λόγος' },
        'bg': { title: '👋 {user} Успешно Изгонен', userField: 'Потребителско Име', reasonField: 'Причина', noReason: 'Не Е Посочена Причина' },
        'ru': { title: '👋 {user} Успешно Кикнут', userField: 'Имя Пользователя', reasonField: 'Причина', noReason: 'Причина Не Указана' },
        'uk': { title: '👋 {user} Успішно Виключено', userField: 'Ім\'я Користувача', reasonField: 'Причина', noReason: 'Причина Не Вказана' },
        'hi': { title: '👋 {user} को सफलतापूर्वक बाहर किया गया', userField: 'उपयोगकर्ता नाम', reasonField: 'कारण', noReason: 'कोई कारण निर्दिष्ट नहीं किया गया' },
        'th': { title: '👋 เตะ {user} สำเร็จ', userField: 'ชื่อผู้ใช้', reasonField: 'เหตุผล', noReason: 'ไม่ได้ระบุเหตุผล' },
        'zh-CN': { title: '👋 成功踢出 {user}', userField: '用户名', reasonField: '原因', noReason: '未指定原因' },
        'ja': { title: '👋 {user} を正常に追放しました', userField: 'ユーザー名', reasonField: '理由', noReason: '指定された理由はありません' },
        'zh-TW': { title: '👋 成功踢出 {user}', userField: '用戶名', reasonField: '原因', noReason: '未指定原因' },
        'ko': { title: '👋 {user} 성공적으로 추방됨', userField: '사용자 이름', reasonField: '이유', noReason: '지정된 이유 없음' }
      };
      const kickFailureMessages: Record<Locale, { title: string, description: string }> = {
        'id': { title: '😥 Gagal mengeluarkan {user}', description: 'Pengguna yang ingin Anda keluarkan mungkin memiliki posisi lebih tinggi dari bot atau mungkin tidak berada di server ini' },
        'da': { title: '😥 Kunne ikke udstøde {user}', description: 'Brugeren, du vil udstøde, kan have en højere rolle end botten eller muligvis ikke være i denne server' },
        'de': { title: '😥 Kick von {user} fehlgeschlagen', description: 'Der zu kickende Benutzer hat möglicherweise eine höhere Position als der Bot oder ist möglicherweise nicht auf diesem Server' },
        'en-GB': { title: '😥 Failed to kick {user}', description: 'The user you are trying to kick may have a higher role than the bot or may not be in this server' },
        'en-US': { title: '😥 Failed to kick {user}', description: 'The user you are trying to kick may have a higher role than the bot or may not be in this server' },
        'es-ES': { title: '😥 No se pudo expulsar a {user}', description: 'El usuario que estás intentando expulsar puede tener un rol superior al bot o puede que no esté en este servidor' },
        'es-419': { title: '😥 No se pudo expulsar a {user}', description: 'El usuario que estás intentando expulsar puede tener un rol superior al bot o puede que no esté en este servidor' },
        'fr': { title: '😥 Impossible d\'expulser {user}', description: 'L\'utilisateur que vous essayez d\'expulser peut avoir un rôle plus élevé que le bot ou ne pas être sur ce serveur' },
        'hr': { title: '😥 Nije uspjelo izbacivanje {user}', description: 'Korisnik kojeg pokušavate izbaciti možda ima višu ulogu od bota ili možda nije na ovom poslužitelju' },
        'it': { title: '😥 Impossibile espellere {user}', description: 'L\'utente che stai cercando di espellere potrebbe avere un ruolo superiore al bot o potrebbe non essere su questo server' },
        'lt': { title: '😥 Nepavyko išmesti {user}', description: 'Naudotojas, kurį bandote pašalinti, gali turėti aukštesnį vaidmenį nei botas arba gali nebūti šiame serveriuje' },
        'hu': { title: '😥 Sikertelen kilépítés {user}', description: 'A felhasználó, akit ki akarsz rúgni, lehet, hogy magasabb szerepet tölt be, mint a bot, vagy lehet, hogy nincs ezen a szerveren' },
        'nl': { title: '😥 Mislukte verwijdering van {user}', description: 'De gebruiker die je probeert te verwijderen, kan een hogere rol hebben dan de bot of misschien niet op deze server zijn' },
        'no': { title: '😥 Kunne ikke kaste ut {user}', description: 'Brukeren du prøver å kaste ut, kan ha en høyere rolle enn boten eller kan hende ikke er på denne serveren' },
        'pl': { title: '😥 Nie udało się wyrzucić {user}', description: 'Użytkownik, którego próbujesz wyrzucić, może mieć wyższą rolę niż bot lub może nie być na tym serwerze' },
        'pt-BR': { title: '😥 Falha ao remover {user}', description: 'O usuário que você está tentando remover pode ter um papel mais alto que o bot ou pode não estar neste servidor' },
        'ro': { title: '😥 Nu am reușit să elimin {user}', description: 'Utilizatorul pe care încerci să-l elimini poate avea un rol mai mare decât botul sau poate să nu fie pe acest server' },
        'fi': { title: '😥 {user} poistaminen epäonnistui', description: 'Käyttäjällä, jota yrität poistaa, saattaa olla korkeamman tason rooli kuin botti tai hän ei ehkä ole tällä palvelimella' },
        'sv-SE': { title: '😥 Misslyckades med att kicka {user}', description: 'Användaren du försöker kicka kan ha en högre roll än botten eller kan vara frånvarande på denna server' },
        'vi': { title: '😥 Không thể kick {user}', description: 'Người dùng bạn đang cố gắng kick có thể có quyền cao hơn bot hoặc có thể không có mặt trên máy chủ này' },
        'tr': { title: '😥 {user} Atılamadı', description: 'Kaldırmak istediğiniz kullanıcı botun rolünden yüksek olabilir veya bu sunucuda olmayabilir' },
        'cs': { title: '😥 Selhalo vyhození {user}', description: 'Uživatel, kterého se pokoušíte vyhodit, může mít vyšší roli než bot nebo nemusí být na tomto serveru' },
        'el': { title: '😥 Αποτυχία αποπομπής του {user}', description: 'Ο χρήστης που προσπαθείτε να απελάσετε μπορεί να έχει υψηλότερο ρόλο από το bot ή μπορεί να μην είναι σε αυτόν τον διακομιστή' },
        'bg': { title: '😥 Неуспешно изгонване на {user}', description: 'Потребителят, когото се опитвате да изгоните, може да има по-висока роля от бота или може да не е на този сървър' },
        'ru': { title: '😥 Не удалось кикнуть {user}', description: 'Пользователь, которого вы пытаетесь кикнуть, может иметь более высокую роль, чем бот, или его может не быть на этом сервере' },
        'uk': { title: '😥 Не вдалося виключити {user}', description: 'Користувач, якого ви намагаєтеся виключити, може мати вищу роль, ніж бот, або можливо його немає на цьому сервері' },
        'hi': { title: '😥 {user} को बाहर करने में विफल', description: 'जिस उपयोगकर्ता को आप बाहर करने की कोशिश कर रहे हैं, वह बोट से अधिक उच्च भूमिका में हो सकता है या इस सर्वर पर नहीं हो सकता' },
        'th': { title: '😥 ไม่สามารถเตะ {user} ได้', description: 'ผู้ใช้ที่คุณพยายามเตะอาจมีตำแหน่งสูงกว่าบอทหรืออาจไม่อยู่ในเซิร์ฟเวอร์นี้' },
        'zh-CN': { title: '😥 踢出 {user} 失败', description: '您尝试踢出的用户可能拥有比机器人更高的角色，或者可能不在此服务器上' },
        'ja': { title: '😥 {user} の追放に失敗しました', description: '追放しようとしているユーザーは、ボットよりも高い役職を持っているか、サーバーにいない可能性があります' },
        'zh-TW': { title: '😥 無法踢出 {user}', description: '您嘗試踢出的用戶可能擁有比機器人更高的角色，或者可能不在此伺服器上' },
        'ko': { title: '😥 {user} 추방 실패', description: '추방하려는 사용자가 봇보다 높은 역할을 가졌거나 이 서버에 없을 수 있습니다' }
      };
  
      const userIdMatch = interaction.message.embeds[0].fields[0].value.match(/<@!?(\d+)>/);
      if (!userIdMatch) {
        await interaction.reply({ content: 'User not found!', ephemeral: true });
        await wait(10_000);
        const message = await interaction.fetchReply();
        await message.delete();
        return;
      };
      const userId = userIdMatch[1];
      const user = interaction.guild?.members.cache.get(userId);
  
      const messages_successMessages = successMessages[interaction.guildLocale || 'en-US'];
      const messages_banFailureMessages = kickFailureMessages[interaction.guildLocale || 'en-US'];
    
      const userDisplayName = user?.displayName || 'Unknown User';
      const userAvatarURL = user?.displayAvatarURL() || 'https://cdn.discordapp.com/embed/avatars/0.png';
  
      try {
        if(interaction.message.embeds[0].fields[1].value != messages_successMessages.noReason){
          const reason = interaction.message.embeds[0].fields[1].value
          await user?.kick( reason );
        } else await user?.kick();
      } catch (error) {
        const embed = new EmbedBuilder()
          .setAuthor({ name: userDisplayName, iconURL: userAvatarURL })
          .setTitle(userDisplayName ? messages_banFailureMessages.title.replace('{user}', userDisplayName) : messages_banFailureMessages.title)
          .setThumbnail(userAvatarURL)
          .setDescription(messages_banFailureMessages.description)
          .addFields(
            { name: messages_successMessages.userField, value: `<@${user?.id}>  `+'(`'+user?.id+'`)' },
            { name: messages_successMessages.reasonField, value: interaction.message.embeds[0].fields[1].value ?? messages_successMessages.noReason },
            { name: '\u200B', value: '\u200B' },
          )
          .setColor(0xff4242)
          .setFooter({ text: interaction.guild?.name, iconURL: interaction.guild?.iconURL() })
          .setTimestamp();
        await interaction.update({ embeds: [embed], components: [] })
        await wait(20_000);
        const message = await interaction.fetchReply();
        await message.delete();
        return;
      };
  
      const success_embed = new EmbedBuilder()
        .setAuthor({ name: userDisplayName, iconURL: userAvatarURL })
        .setTitle(userDisplayName ? messages_successMessages.title.replace('{user}', userDisplayName) : messages_successMessages.title)
        .setThumbnail(userAvatarURL)
        .addFields(
            { name: messages_successMessages.userField, value: `<@${user?.id}>  `+'(`'+user?.id+'`)' },
            { name: messages_successMessages.reasonField, value: interaction.message.embeds[0].fields[1].value ?? messages_successMessages.noReason },
            { name: '\u200B', value: '\u200B' },
        )
        .setColor(0xff4242)
        .setFooter({ text: interaction.guild?.name, iconURL: interaction.guild?.iconURL() })
        .setTimestamp();
  
      await interaction.update({ embeds: [success_embed], components: [] });
    } else {
      const permis_kickMessages: Record<Locale, string> = {
        'th': 'คุณไม่มีสิทธิ์ `เตะสมาชิก` เพื่อที่จะเตะสมาชิก',
        'id': 'Anda tidak punya hak untuk `menendang anggota` demi menendang anggota',
        'da': 'Du har ikke rettigheder til `at sparke medlem` for at sparke medlem',
        'de': 'Du hast keine Rechte um `Mitglied zu kicken` um Mitglied zu kicken',
        'en-GB': "You don't have rights to `kick member` in order to kick member",
        'en-US': "You don't have rights to `kick member` in order to kick member",
        'es-ES': 'No tienes derechos para `expulsar miembro` para expulsar miembro',
        'es-419': 'No tienes derechos para `expulsar miembro` para expulsar miembro',
        'fr': "Vous n'avez pas de droits pour `expulser membre` afin d'expulser membre",
        'hr': 'Nemate prava za `izbaciti člana` da izbacite člana',
        'it': 'Non hai diritti per `cacciare membro` per cacciare membro',
        'lt': 'Neturite teisių `išmesti narį` kad išmesti narį',
        'hu': 'Nincs joga `tagot kirúgni` hogy kirúgja a tagot',
        'nl': 'Je hebt geen rechten om `lid te schoppen` om lid te schoppen',
        'no': 'Du har ikke rettigheter til å `sparke medlem` for å sparke medlem',
        'pl': 'Nie masz praw do `wyrzucić członka` aby wyrzucić członka',
        'pt-BR': 'Você não tem direitos para `expelir membro` para expulsar membro',
        'ro': 'Nu aveți drepturi pentru a `împinge membru` pentru a împinge membru',
        'fi': 'Sinulla ei ole oikeuksia `potkaista jäsentä` jotta voit potkaista jäsentä',
        'sv-SE': 'Du har inga rättigheter att `sparka medlem` för att sparka medlem',
        'vi': 'Bạn không có quyền `đá thành viên` để đá thành viên',
        'tr': '`Üyeyi atmak` için haklarınız yok',
        'cs': 'Nemáte práva `vyloučit člena` pro vyloučení člena',
        'el': 'Δεν έχετε δικαιώματα για `απομάκρυνση μέλους` για να απομακρύνετε μέλος',
        'bg': 'Нямате права да `изгоните член` за да изгоните член',
        'ru': 'У вас нет прав `выгнать участника` чтобы выгнать участника',
        'uk': 'У вас немає прав `вигнати учасника` щоб вигнати учасника',
        'hi': 'आपके पास अधिकार नहीं हैं `सदस्य को बाहर निकालें` सदस्य को बाहर निकालने के लिए',
        'zh-CN': '你没有权利 `踢出成员` 来踢出成员',
        'ja': 'あなたには `メンバーを追い出す` 権限がありません',
        'zh-TW': '你沒有權利 `踢出成員` 來踢出成員',
        'ko': '당신에게는 `멤버를 내보낼` 권리가 없습니다'
    };
      await interaction.reply({ content: permis_kickMessages[interaction.locale || 'en-US'], ephemeral: true })
    }
  } else if (interaction.customId === 'cancel_kick') {
    const userIdMatch = interaction.message.embeds[0].fields[0].value.match(/<@!?(\d+)>/);
    if (!userIdMatch) {
      await interaction.reply({ content: 'User not found!', ephemeral: true });
      await wait(10_000);
      const message = await interaction.fetchReply();
      await message.delete();
      return;
    };
    const userId = userIdMatch[1];
    const user = interaction.guild?.members.cache.get(userId);

    const userDisplayName = user?.displayName || 'Unknown User';
    const userAvatarURL = user?.displayAvatarURL() || 'https://cdn.discordapp.com/embed/avatars/0.png';

    const cancelMessages: Record<Locale, { title: string }> = {
      'id': { title: '🚫 Pembatalan Pengeluaran {user}' },
      'da': { title: '🚫 Afbrydelse af Udflytning {user}' },
      'de': { title: '🚫 Kick-Abbruch von {user}' },
      'en-GB': { title: '🚫 Kick Cancellation for {user}' },
      'en-US': { title: '🚫 Kick Cancellation for {user}' },
      'es-ES': { title: '🚫 Cancelación de Expulsión de {user}' },
      'es-419': { title: '🚫 Cancelación de Expulsión de {user}' },
      'fr': { title: '🚫 Annulation de l\'expulsion de {user}' },
      'hr': { title: '🚫 Otkaženo izbacivanje {user}' },
      'it': { title: '🚫 Cancellazione del Kick di {user}' },
      'lt': { title: '🚫 Išmetimo Atšaukimas {user}' },
      'hu': { title: '🚫 {user} Kitiltásának Megszakítása' },
      'nl': { title: '🚫 Annulering van {user} Kick' },
      'no': { title: '🚫 Avbryt Kick av {user}' },
      'pl': { title: '🚫 Anulowanie Wyrzucenia {user}' },
      'pt-BR': { title: '🚫 Cancelamento de Kick de {user}' },
      'ro': { title: '🚫 Anulare Kick pentru {user}' },
      'fi': { title: '🚫 Kickin Peruutus {user}' },
      'sv-SE': { title: '🚫 Kick-avbokning för {user}' },
      'vi': { title: '🚫 Hủy Kick {user}' },
      'tr': { title: '🚫 {user} Kick İptali' },
      'cs': { title: '🚫 Zrušení Kicky pro {user}' },
      'el': { title: '🚫 Ακύρωση Αποβολής {user}' },
      'bg': { title: '🚫 Отмяна на Изгонването на {user}' },
      'ru': { title: '🚫 Отмена кика {user}' },
      'uk': { title: '🚫 Скасування вигнання {user}' },
      'hi': { title: '🚫 {user} के लिए किक रद्द' },
      'th': { title: '🚫 ยกเลิกการเตะ {user}' },
      'zh-CN': { title: '🚫 取消对 {user} 的踢出' },
      'ja': { title: '🚫 {user} のキックをキャンセルしました' },
      'zh-TW': { title: '🚫 取消對 {user} 的踢出' },
      'ko': { title: '🚫 {user} 차단 취소' }
    };

    const embed = new EmbedBuilder()
      .setAuthor({ name: userDisplayName, iconURL: userAvatarURL })
      .setTitle(cancelMessages[interaction.guildLocale || 'en-US'].title.replace('{user}', userDisplayName ?? 'ผู้ใช้'))
      .setThumbnail(userAvatarURL)
      .addFields({ name: '\u200B', value: '\u200B' })
      .setColor(0xff4242)
      .setFooter({ text: interaction.guild?.name, iconURL: interaction.guild?.iconURL() })
      .setTimestamp();

    await interaction.update({ embeds: [embed], components: [] });
    await wait(10_000);
    const message = await interaction.fetchReply();
    await message.delete();
  }
}
})();
}
}