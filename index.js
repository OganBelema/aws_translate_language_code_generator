module.exports =  function getLanguageCode(language) {
    switch(language.toLowerCase()) {

        case 'croatian':
            return 'hr'   
            
        case 'dutch':
            return 'nl' 

        case 'english':
            return 'en'

        case 'french':
            return 'fr' 
            
        case 'german': 
            return 'de'
    
        case 'greek':
            return 'el' 

        case 'hausa':
            return 'ha' 

        case 'hebrew':
            return 'he'

        case 'irish':
            return 'ga'   
            
        case 'italian':    
            return 'it'

        case 'portuguese':
            return 'pt-PT' 

        case 'russian':
            return 'ru' 

        case 'spanish':
            return 'es'            
            
        default:
            return 'en'    
    }

}