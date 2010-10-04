Tailfeather = {
    socket     : null,
    targetElem : null,

    connect: function(url, targetElem, username, password) {
	var self = this;
	if (!self.socket) {
	    self.targetElem       = targetElem;
	    self.socket           = new WebSocket(url);
	    self.socket.onopen    = function()  {self.onOpen(username, password);};
	    self.socket.onerror   = function()  {self.onError();};
	    self.socket.onclose   = function()  {self.onClose();};
	}
    },

    clear: function() {
	if (this.targetElem) {
	    targetElem.html('');
	}
    },

    disconnect: function() {
	if (this.socket) {
	    this.socket.close();
	}
    },

    onOpen: function(username, password) {
        var self = this;
        this.writeLine("********** CONNECTION OPENED **********");
        self.socket.onmessage = function(e) {self.onRecv(e.data);};
	self.socket.send('{"username":"'+username+'","password":"'+password+'"}');
    },

    onError: function() {
	this.writeLine("********** CONNECTION ERROR **********");
    },

    onClose: function() {
	this.writeLine("********** CONNECTION CLOSED **********");
	this.socket     = null;
	this.targetElem = null;
    },

    onRecv: function(mesg) {
	this.writeLine(mesg);
    },

    writeLine: function(line) {
	this.targetElem.append(line + "\n");
    }
}
