import { UserRepository,ISys_User,Sys_User } from './../src';


import { expect } from 'chai';

describe('User Creation', () => {
 let userRepository : UserRepository = null;
 before('creating Repository',() => {
    userRepository = new UserRepository();
 });
 it('should return the user', (done) => {
    let user : ISys_User = {} as ISys_User;
    user.user_name = 'ekriesw';
    user.user_password = 'test123';
    userRepository.create(user, (error:any,result:any) => {
        console.log(result);
        expect(error).to.be.null;
        expect(result).not.to.be.undefined;
   //     expect(result.user_name).to.be.equal(user.user_name);
        done(); 
    }); 
 });
}); 