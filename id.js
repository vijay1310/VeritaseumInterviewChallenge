
/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

if (/*NAMESPACE == null || */ // NAMESPACE is not declared and hence compile time error will occur
		// To avoid NAMESPACE error, we can define as 'var NAMESPACE;' or we can remove null sanity check in the if clause
        typeof (NAMESPACE) == 'undefined') {
    NAMESPACE = {};

    var id = function (id) {
        var _all_ids = new Array();		// The array literal can be defined with [] is preferable
        var persona = {};
        var _id = id;

        var getId = function () {
            return _id;
        }

        persona.getId = getId();
        var _closed = false;
        
        var close = function () {
            if(_all_ids[getId()] !== undefined) {
            	_all_ids.splice(getId(), 1);		// delete _all_ids[getId()]; will set the specified element with 'undefined'
            }
            this._closed = true;
        }
        
        persona.close = close();
        
        return persona;
    }

    NAMESPACE['id'] = id(0);		// getting the persona object
}