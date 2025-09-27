import Card from "../../ui/Card";
import styles from "./LoginForm.module.css"

export function LoginForm() {
  return (

    <>

      <Card className={styles['login-container']}>
        <Card className={styles['login-card']}>
          <h1>Tela de Login</h1>
          <p>Acesse sua conta para se conectar com a paróquia</p>
          
          <form action="" className={styles["login-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="email" placeholder="seu@email.com"/>
            </div>
            
            <div className={styles["form-group"]}>
              <label htmlFor="">Senha</label>
              <input type="password" name="password" id="password" placeholder="Sua senha"/>
            </div>
            
            <button type="submit">Entrar</button>
          </form>
          <p>
            Não tem uma conta? <a href="/registro">Registre-se aqui</a>
          </p>
        
        </Card>
      </Card>

    </>

  )
}