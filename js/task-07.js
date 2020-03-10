/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
    tCounter: 0,
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        if(type=== 'deposit' ){
            this.deposit(amount);

        }else if(type === 'withdraw'){
            this.withdraw(amount);
        }
        const currentTransaction = {id:this.tCounter, type:type, balance:this.balance};
        this.transactions.push(currentTransaction);
    },
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.tCounter ++;
        const currentBalance = this.balance;
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        this.balance -= amount;
        this.tCounter ++;
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        console.log(this.balance);
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        console.log(this.transactions[id-1]);
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        for(const transaction of this.transactions){
            if(transaction.type === type){
                console.log(transaction);
            }
            // console.log(transaction);
        }
    },
  };

account.deposit(100)
account.withdraw(200)
//   account.createTransaction(500,'deposit');
//   account.createTransaction(300,'withdraw');
//   account.createTransaction(500,'deposit');
//   account.createTransaction(100,'withdraw');
//   account.createTransaction(700,'deposit');
  console.log(account.balance);
  console.table(account.transactions);
  account.getBalance();
//   account.getTransactionDetails(2);
  account.getTransactionTotal('withdraw');

