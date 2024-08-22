import com.sap.gateway.ip.core.customdev.util.Message
import java.util.HashMap

def Message processData(Message message) {
    // Properties
    def properties = message.getProperties()
    
    // Obtener el valor de la propiedad Query
    def query = properties.get("Query")

    // Verificar si la propiedad Query no es nula y contiene las variables requeridas
    if (query != null && query.contains("&")) {

        // Separar el string basado en el delimitador "&"
        def queryParams = query.split("&")

        // Iterar sobre los parámetros y separar el nombre de la variable y su valor
        queryParams.each { param ->
            def keyValue = param.split("=")
            if (keyValue.size() == 2) {
                def key = keyValue[0]
                def value = keyValue[1]
                
                // Crear una nueva propiedad con el nombre de la variable y asignarle su valor
                message.setProperty(key, value)
            }
        }
    }

    return message
}
