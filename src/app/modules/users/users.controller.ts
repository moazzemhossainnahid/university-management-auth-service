import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)

    res.status(200).json({
      success: true,
      message: 'User Created Successfully!',
      data: result,
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Failed to Create User',
    })
  }
}

export default {
  createUser,
}
