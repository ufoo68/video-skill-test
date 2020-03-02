import * as Alexa from 'ask-sdk-core'

interface TranslationMessage {
  WELCOME_MSG: string
  PLAY_MSG: string
  HELP_MSG: string
  GOODBYE_MSG: string
  REFLECTOR_MSG: string
  FALLBACK_MSG: string
  ERROR_MSG: string
}

const languageStrings = (handler: Alexa.HandlerInput, intentName?: string): TranslationMessage => {
  const { locale } = handler.requestEnvelope.request
  switch (locale) {
    case 'ja-JP':
      return {
        WELCOME_MSG: 'ようこそ。再生、または、ヘルプ、と言ってみてください。どうぞ！',
        PLAY_MSG: '動画を再生します',
        HELP_MSG: '再生、と言ってみてください。どうぞ！',
        GOODBYE_MSG: 'さようなら',
        REFLECTOR_MSG: `${intentName}がトリガーされました。`,
        FALLBACK_MSG: 'ごめんなさい。ちょっとよくわかりませんでした。もう一度言ってみてください。',
        ERROR_MSG: 'ごめんなさい。なんだかうまく行かないようです。もう一度言ってみてください。',
      }
    default:
      return {
        WELCOME_MSG: '',
        PLAY_MSG: '',
        HELP_MSG: '',
        GOODBYE_MSG: '',
        REFLECTOR_MSG: '',
        FALLBACK_MSG: '',
        ERROR_MSG: '',
      }
  }
}

export default languageStrings
