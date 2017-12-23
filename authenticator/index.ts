import * as express from 'express'
import { Response, Controller, Post, attachControllers } from '@decorators/express'
import { Injectable } from '@decorators/di'

@Injectable()
@Controller('/')
class UsersController {

  @Post('/login')
  public login( @Response() res): void {
    res.send(this.generateTokens())
  }

  @Post('/refresh')
  public refresh( @Response() res): void {
    // emulate long request
    setTimeout(() => res.send(this.generateTokens()), 1000)
  }

  private generateTokens() {
    return {
      accessToken: 'access-token-' + Math.random(),
      refreshToken: 'access-token-' + Math.random()
    }
  }

}

const app = express()

app.use((
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

attachControllers(app, [
  UsersController
])

const port = process.env.PORT || 4300

app.listen(port, function () {
  console.log('Authentification server ready on port ' + port)
})
