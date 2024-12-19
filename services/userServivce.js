class UserServife {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUserById(id) {
    return this.userRepository.getUserById(id);
  }
}