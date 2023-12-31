import { User } from './users.model'
import { IUser } from './users.interface'
import config from '../../../config/index'
import { generateUserId } from './users.utils'

const createUser = async (data: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()

  data.id = id
  // default password

  if (!data.password) {
    data.password = config.default_user_pass as string
  }
  const createdUser = await User.create(data)
  if (!createUser) {
    throw new Error('Failed to create User')
  }

  return createdUser
}

export default {
  createUser,
}
