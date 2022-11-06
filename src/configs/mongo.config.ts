import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
    return {
        uri: getMongoString(),
        ...getMongoOptions(configService)
    }
}

const getMongoOptions = (configService: ConfigService) => {
    return {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

const getMongoString = () => {
    return 'mongodb://localhost:27017/purple-nest'
}