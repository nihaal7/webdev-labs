# dummy helper class for spoofing a logged in user
class CurrentUser(object):
    def __init__(self, *args, **kwargs):
        self.first_name = kwargs.get('first_name')
        self.last_name = kwargs.get('last_name')
        self.email = kwargs.get('email')
        self.username = kwargs.get('username')
        self.random_quote = kwargs.get('random_quote')

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    def get_random_quote(self):
        return self.random_quote