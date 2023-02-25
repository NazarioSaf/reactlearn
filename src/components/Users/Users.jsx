import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0){
  props.setUsers([
    { id: 1, photo: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg', followed: false, fullName: 'Dima', status: 'i lova life', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 2, photo: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg', followed: false, fullName: 'Nazar', status: 'Hello', location: { city: 'Moscow', country: 'Russia' } },
    { id: 3, photo: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg', followed: true, fullName: 'Nika', status: 'kukusiki', location: { city: 'Kusrk', country: 'Russia' } },
    { id: 4, photo: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg', followed: true, fullName: 'Pika', status: 'die', location: { city: 'Minsk', country: 'Belarus' } }
  ])
}

  return <div> 
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div><img src={u.photo} className={s.photo} /></div>
          <div>
            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </span>
      </div>)
    }
  </div>;
}

export default Users;