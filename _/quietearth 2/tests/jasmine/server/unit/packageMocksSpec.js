// goal: read JSON metadata for packages and create the mocks
// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "reload": {},
  "json": {},
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "isValidUrl": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "isValidUrl": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAIN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "main"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 500,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 500
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 503
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 503
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 506
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 506
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 509
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 509
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "jquery": {},
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            },
            "simpleSchema": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 33
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 49
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 33
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 49
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 33
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 49
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 33
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 49
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "templating": {},
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 33
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 49
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 33
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 49
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 33
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 49
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 33
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 49
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "6a9280344334a516ab887213832de8bdb7c277c7"
                },
                "PUBLIC_SETTINGS": {
                  "type": "undefined"
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 9
            },
            "handle": {
              "type": "function",
              "refID": 11
            },
            "listen": {
              "type": "function",
              "refID": 13
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 15
            },
            "emit": {
              "type": "function",
              "refID": 17
            },
            "addListener": {
              "type": "function",
              "refID": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "type": "function",
              "refID": 21
            },
            "removeListener": {
              "type": "function",
              "refID": 23
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 25
            },
            "listeners": {
              "type": "function",
              "refID": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 9
            },
            "handle": {
              "ref": 11
            },
            "listen": {
              "ref": 13
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 0
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "calculateVersion": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "helpers": {
                  "type": "function"
                },
                "attachSchema": {
                  "type": "function"
                },
                "simpleSchema": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function"
                },
                "rawDatabase": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "constant",
          "value": "f8b65613a60ad34f3b8190d236d2ab1fa0b974c5"
        },
        "autoupdateVersionRefreshable": {
          "type": "constant",
          "value": "71833341ddf91e5115bf3b6c5e7c92a2870dd1b8"
        },
        "autoupdateVersionCordova": {
          "type": "constant",
          "value": "none"
        },
        "appId": {
          "type": "constant",
          "value": "1tdp9wq6dso4c7vn8io"
        }
      }
    }
  },
  "meteor-platform": {},
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "meteorhacks:flow-layout": {
    "FlowLayout": {
      "type": "undefined"
    }
  },
  "kadira:flow-router": {
    "FlowRouter": {
      "type": "object",
      "members": {
        "subscriptions": {
          "type": "function",
          "members": {
            "future": {
              "type": "function"
            }
          }
        },
        "Router": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "route": {
                  "type": "function",
                  "refID": 6
                },
                "group": {
                  "type": "function",
                  "refID": 8
                },
                "path": {
                  "type": "function",
                  "refID": 10
                },
                "onRouteRegister": {
                  "type": "function",
                  "refID": 12
                },
                "go": {
                  "type": "function",
                  "refID": 14
                },
                "current": {
                  "type": "function",
                  "refID": 16
                },
                "triggers": {
                  "type": "object",
                  "refID": 18,
                  "members": {
                    "enter": {
                      "type": "function"
                    },
                    "exit": {
                      "type": "function"
                    }
                  }
                },
                "middleware": {
                  "type": "function",
                  "refID": 23
                },
                "getState": {
                  "type": "function",
                  "refID": 25
                },
                "getAllStates": {
                  "type": "function",
                  "refID": 27
                },
                "setState": {
                  "type": "function",
                  "refID": 29
                },
                "removeState": {
                  "type": "function",
                  "refID": 31
                },
                "clearStates": {
                  "type": "function",
                  "refID": 33
                },
                "ready": {
                  "type": "function",
                  "refID": 35
                },
                "initialize": {
                  "type": "function",
                  "refID": 37
                },
                "wait": {
                  "type": "function",
                  "refID": 39
                }
              }
            }
          }
        },
        "Route": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "register": {
                  "type": "function"
                },
                "subscription": {
                  "type": "function"
                },
                "middleware": {
                  "type": "function"
                }
              }
            }
          }
        },
        "route": {
          "ref": 6
        },
        "group": {
          "ref": 8
        },
        "path": {
          "ref": 10
        },
        "onRouteRegister": {
          "ref": 12
        },
        "go": {
          "ref": 14
        },
        "current": {
          "ref": 16
        },
        "triggers": {
          "ref": 18
        },
        "middleware": {
          "ref": 23
        },
        "getState": {
          "ref": 25
        },
        "getAllStates": {
          "ref": 27
        },
        "setState": {
          "ref": 29
        },
        "removeState": {
          "ref": 31
        },
        "clearStates": {
          "ref": 33
        },
        "ready": {
          "ref": 35
        },
        "initialize": {
          "ref": 37
        },
        "wait": {
          "ref": 39
        }
      }
    }
  },
  "twbs:bootstrap": {},
  "npm-bcrypt": {
    "NpmModuleBcrypt": {
      "type": "object",
      "members": {
        "genSaltSync": {
          "type": "function"
        },
        "genSalt": {
          "type": "function"
        },
        "hashSync": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "compareSync": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "getRounds": {
          "type": "function"
        }
      }
    }
  },
  "accounts-base": {
    "Accounts": {
      "type": "object",
      "members": {
        "config": {
          "type": "function"
        },
        "LoginCancelledError": {
          "type": "function",
          "members": {
            "numericError": {
              "type": "constant",
              "value": 145546287
            }
          }
        },
        "onLogin": {
          "type": "function"
        },
        "onLoginFailure": {
          "type": "function"
        },
        "validateLoginAttempt": {
          "type": "function"
        },
        "registerLoginHandler": {
          "type": "function"
        },
        "destroyToken": {
          "type": "function"
        },
        "onCreateUser": {
          "type": "function"
        },
        "insertUserDoc": {
          "type": "function"
        },
        "validateNewUser": {
          "type": "function"
        },
        "updateOrCreateUserFromExternalService": {
          "type": "function"
        },
        "addAutopublishFields": {
          "type": "function"
        },
        "urls": {
          "type": "object",
          "members": {
            "resetPassword": {
              "type": "function"
            },
            "verifyEmail": {
              "type": "function"
            },
            "enrollAccount": {
              "type": "function"
            }
          }
        },
        "emailTemplates": {
          "type": "object",
          "members": {
            "from": {
              "type": "constant",
              "value": "Meteor Accounts <no-reply@meteor.com>"
            },
            "siteName": {
              "type": "constant",
              "value": "localhost:3000"
            },
            "resetPassword": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            }
          }
        },
        "setPassword": {
          "type": "function"
        },
        "sendResetPasswordEmail": {
          "type": "function"
        },
        "sendEnrollmentEmail": {
          "type": "function"
        },
        "sendVerificationEmail": {
          "type": "function"
        },
        "createUser": {
          "type": "function"
        },
        "loginServiceConfiguration": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "hookOptions": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "upsert": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                },
                "all": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                }
              }
            },
            "direct": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "upsert": {
              "type": "function"
            },
            "constructor": {
              "type": "function",
              "refID": 122,
              "members": {
                "Cursor": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "rewind": {
                          "type": "function"
                        },
                        "forEach": {
                          "type": "function"
                        },
                        "getTransform": {
                          "type": "function"
                        },
                        "map": {
                          "type": "function"
                        },
                        "fetch": {
                          "type": "function"
                        },
                        "count": {
                          "type": "function"
                        },
                        "observe": {
                          "type": "function"
                        },
                        "observeChanges": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "ObjectID": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "toString": {
                          "type": "function"
                        },
                        "equals": {
                          "type": "function"
                        },
                        "clone": {
                          "type": "function"
                        },
                        "typeName": {
                          "type": "function"
                        },
                        "getTimestamp": {
                          "type": "function"
                        },
                        "toHexString": {
                          "type": "function",
                          "refID": 153
                        },
                        "toJSONValue": {
                          "ref": 153
                        },
                        "valueOf": {
                          "ref": 153
                        }
                      }
                    }
                  }
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 122
                    },
                    "helpers": {
                      "type": "function",
                      "refID": 156
                    },
                    "attachSchema": {
                      "type": "function",
                      "refID": 158
                    },
                    "simpleSchema": {
                      "type": "function",
                      "refID": 160
                    },
                    "insert": {
                      "type": "function",
                      "refID": 162
                    },
                    "update": {
                      "type": "function",
                      "refID": 164
                    },
                    "find": {
                      "type": "function",
                      "refID": 166
                    },
                    "findOne": {
                      "type": "function",
                      "refID": 168
                    },
                    "remove": {
                      "type": "function",
                      "refID": 170
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "rawCollection": {
                      "type": "function",
                      "refID": 174
                    },
                    "rawDatabase": {
                      "type": "function",
                      "refID": 176
                    },
                    "allow": {
                      "type": "function",
                      "refID": 178
                    },
                    "deny": {
                      "type": "function",
                      "refID": 180
                    }
                  }
                }
              }
            },
            "helpers": {
              "ref": 156
            },
            "attachSchema": {
              "ref": 158
            },
            "simpleSchema": {
              "ref": 160
            },
            "insert": {
              "ref": 162
            },
            "update": {
              "ref": 164
            },
            "find": {
              "ref": 166
            },
            "findOne": {
              "ref": 168
            },
            "remove": {
              "ref": 170
            },
            "rawCollection": {
              "ref": 174
            },
            "rawDatabase": {
              "ref": 176
            },
            "allow": {
              "ref": 178
            },
            "deny": {
              "ref": 180
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    },
    "AccountsTest": {
      "type": "undefined"
    }
  },
  "sha": {
    "SHA256": {
      "type": "function"
    }
  },
  "srp": {
    "SRP": {
      "type": "object",
      "members": {
        "generateVerifier": {
          "type": "function"
        },
        "matchVerifier": {
          "type": "object",
          "members": {
            "identity": {
              "type": "function",
              "refID": 4
            },
            "salt": {
              "ref": 4
            },
            "verifier": {
              "ref": 4
            }
          }
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "accounts-password": {},
  "alanning:roles": {
    "Roles": {
      "type": "object",
      "members": {
        "GLOBAL_GROUP": {
          "type": "constant",
          "value": "__global_roles__"
        },
        "createRole": {
          "type": "function"
        },
        "deleteRole": {
          "type": "function"
        },
        "addUsersToRoles": {
          "type": "function"
        },
        "setUserRoles": {
          "type": "function"
        },
        "removeUsersFromRoles": {
          "type": "function"
        },
        "userIsInRole": {
          "type": "function"
        },
        "getRolesForUser": {
          "type": "function"
        },
        "getAllRoles": {
          "type": "function"
        },
        "getUsersInRole": {
          "type": "function"
        },
        "getGroupsForUser": {
          "type": "function"
        }
      }
    }
  },
  "fortawesome:fontawesome": {},
  "cfs:standard-packages": {},
  "cfs:base-package": {
    "FS": {
      "type": "object",
      "members": {
        "Store": {
          "type": "object",
          "members": {
            "GridFS": {
              "type": "function"
            },
            "FileSystem": {
              "type": "function"
            },
            "S3": {
              "type": "function"
            }
          }
        },
        "AccessPoint": {
          "type": "object"
        },
        "Utility": {
          "type": "object",
          "members": {
            "cloneFileRecord": {
              "type": "function"
            },
            "defaultCallback": {
              "type": "function"
            },
            "handleError": {
              "type": "function"
            },
            "noop": {
              "type": "function"
            },
            "validateAction": {
              "type": "function"
            },
            "getFileName": {
              "type": "function"
            },
            "getFileExtension": {
              "type": "function"
            },
            "setFileExtension": {
              "type": "function"
            },
            "encodeParams": {
              "type": "function"
            },
            "encodeString": {
              "type": "function"
            },
            "btoa": {
              "type": "function"
            },
            "atob": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "each": {
              "type": "function"
            },
            "isEmpty": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            },
            "isArray": {
              "type": "function"
            },
            "map": {
              "type": "function"
            },
            "once": {
              "type": "function"
            },
            "include": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "binaryToBuffer": {
              "type": "function"
            },
            "bufferToBinary": {
              "type": "function"
            },
            "safeCallback": {
              "type": "function"
            },
            "safeStream": {
              "type": "function"
            },
            "eachFileFromPath": {
              "type": "function"
            }
          }
        },
        "config": {
          "type": "object"
        },
        "StorageAdapter": {
          "type": "function",
          "members": {
            "super_": {
              "type": "function",
              "members": {
                "listenerCount": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "setMaxListeners": {
                      "type": "function",
                      "refID": 67
                    },
                    "emit": {
                      "type": "function",
                      "refID": 69
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 71
                    },
                    "on": {
                      "ref": 71
                    },
                    "once": {
                      "type": "function",
                      "refID": 73
                    },
                    "removeListener": {
                      "type": "function",
                      "refID": 75
                    },
                    "removeAllListeners": {
                      "type": "function",
                      "refID": 77
                    },
                    "listeners": {
                      "type": "function",
                      "refID": 79
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "setMaxListeners": {
                  "ref": 67
                },
                "emit": {
                  "ref": 69
                },
                "addListener": {
                  "ref": 71
                },
                "on": {
                  "ref": 71
                },
                "once": {
                  "ref": 73
                },
                "removeListener": {
                  "ref": 75
                },
                "removeAllListeners": {
                  "ref": 77
                },
                "listeners": {
                  "ref": 79
                }
              }
            }
          }
        },
        "Transform": {
          "type": "function",
          "members": {
            "scope": {
              "type": "object",
              "members": {
                "gm": {
                  "type": "function"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "createWriteStream": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                }
              }
            }
          }
        },
        "File": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "domain": {
                  "type": "null",
                  "value": null
                },
                "attachData": {
                  "type": "function"
                },
                "uploadProgress": {
                  "type": "function"
                },
                "controlledByDeps": {
                  "type": "function"
                },
                "getCollection": {
                  "type": "function",
                  "refID": 99
                },
                "isMounted": {
                  "ref": 99
                },
                "getFileRecord": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "getExtension": {
                  "type": "function"
                },
                "isImage": {
                  "type": "function"
                },
                "isVideo": {
                  "type": "function"
                },
                "isAudio": {
                  "type": "function"
                },
                "formattedSize": {
                  "type": "function"
                },
                "isUploaded": {
                  "type": "function"
                },
                "hasStored": {
                  "type": "function",
                  "refID": 119
                },
                "hasCopy": {
                  "ref": 119
                },
                "getCopyInfo": {
                  "type": "function"
                },
                "name": {
                  "type": "function"
                },
                "extension": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                },
                "updatedAt": {
                  "type": "function"
                },
                "logCopyFailure": {
                  "type": "function"
                },
                "failedPermanently": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "createWriteStream": {
                  "type": "function"
                },
                "copy": {
                  "type": "function"
                },
                "copyData": {
                  "type": "function"
                },
                "moveData": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 67
                },
                "emit": {
                  "ref": 69
                },
                "addListener": {
                  "ref": 71
                },
                "on": {
                  "ref": 71
                },
                "once": {
                  "ref": 73
                },
                "removeListener": {
                  "ref": 75
                },
                "removeAllListeners": {
                  "ref": 77
                },
                "listeners": {
                  "ref": 79
                }
              }
            }
          }
        },
        "TempStore": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "Tracker": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "type": "function",
                  "refID": 215,
                  "members": {
                    "Cursor": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "rewind": {
                              "type": "function"
                            },
                            "forEach": {
                              "type": "function"
                            },
                            "getTransform": {
                              "type": "function"
                            },
                            "map": {
                              "type": "function"
                            },
                            "fetch": {
                              "type": "function"
                            },
                            "count": {
                              "type": "function"
                            },
                            "observe": {
                              "type": "function"
                            },
                            "observeChanges": {
                              "type": "function"
                            }
                          }
                        }
                      }
                    },
                    "ObjectID": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "toString": {
                              "type": "function"
                            },
                            "equals": {
                              "type": "function"
                            },
                            "clone": {
                              "type": "function"
                            },
                            "typeName": {
                              "type": "function"
                            },
                            "getTimestamp": {
                              "type": "function"
                            },
                            "toHexString": {
                              "type": "function",
                              "refID": 246
                            },
                            "toJSONValue": {
                              "ref": 246
                            },
                            "valueOf": {
                              "ref": 246
                            }
                          }
                        }
                      }
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "constructor": {
                          "ref": 215
                        },
                        "helpers": {
                          "type": "function",
                          "refID": 249
                        },
                        "attachSchema": {
                          "type": "function",
                          "refID": 251
                        },
                        "simpleSchema": {
                          "type": "function",
                          "refID": 253
                        },
                        "insert": {
                          "type": "function",
                          "refID": 255
                        },
                        "update": {
                          "type": "function",
                          "refID": 257
                        },
                        "find": {
                          "type": "function",
                          "refID": 259
                        },
                        "findOne": {
                          "type": "function",
                          "refID": 261
                        },
                        "remove": {
                          "type": "function",
                          "refID": 263
                        },
                        "upsert": {
                          "type": "function"
                        },
                        "rawCollection": {
                          "type": "function",
                          "refID": 267
                        },
                        "rawDatabase": {
                          "type": "function",
                          "refID": 269
                        },
                        "allow": {
                          "type": "function",
                          "refID": 271
                        },
                        "deny": {
                          "type": "function",
                          "refID": 273
                        }
                      }
                    }
                  }
                },
                "helpers": {
                  "ref": 249
                },
                "attachSchema": {
                  "ref": 251
                },
                "simpleSchema": {
                  "ref": 253
                },
                "insert": {
                  "ref": 255
                },
                "update": {
                  "ref": 257
                },
                "find": {
                  "ref": 259
                },
                "findOne": {
                  "ref": 261
                },
                "remove": {
                  "ref": 263
                },
                "rawCollection": {
                  "ref": 267
                },
                "rawDatabase": {
                  "ref": 269
                },
                "allow": {
                  "ref": 271
                },
                "deny": {
                  "ref": 273
                }
              }
            },
            "Storage": {
              "type": "object",
              "members": {
                "mongoUrl": {
                  "type": "constant",
                  "value": "mongodb://127.0.0.1:3001/meteor"
                },
                "mongoOptions": {
                  "type": "object",
                  "members": {
                    "db": {
                      "type": "object"
                    },
                    "server": {
                      "type": "object"
                    }
                  }
                },
                "name": {
                  "type": "constant",
                  "value": "_tempstore"
                },
                "typeName": {
                  "type": "constant",
                  "value": "storage.gridfs"
                },
                "adapter": {
                  "type": "object",
                  "members": {
                    "fileKey": {
                      "type": "function"
                    },
                    "createReadStreamForFileKey": {
                      "type": "function"
                    },
                    "createReadStream": {
                      "type": "function"
                    },
                    "createWriteStreamForFileKey": {
                      "type": "function"
                    },
                    "createWriteStream": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    }
                  }
                },
                "remove": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 67
                },
                "emit": {
                  "ref": 69
                },
                "addListener": {
                  "ref": 71
                },
                "on": {
                  "ref": 71
                },
                "once": {
                  "ref": 73
                },
                "removeListener": {
                  "ref": 75
                },
                "removeAllListeners": {
                  "ref": 77
                },
                "listeners": {
                  "ref": 79
                }
              }
            },
            "exists": {
              "type": "function"
            },
            "listParts": {
              "type": "function"
            },
            "removeFile": {
              "type": "function"
            },
            "removeAll": {
              "type": "function"
            },
            "createWriteStream": {
              "type": "function"
            },
            "createReadStream": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 67
            },
            "emit": {
              "ref": 69
            },
            "addListener": {
              "ref": 71
            },
            "on": {
              "ref": 71
            },
            "once": {
              "ref": 73
            },
            "removeListener": {
              "ref": 75
            },
            "removeAllListeners": {
              "ref": 77
            },
            "listeners": {
              "ref": 79
            }
          }
        },
        "HTTP": {
          "type": "object",
          "members": {
            "uploadUrl": {
              "type": "constant",
              "value": "/cfs/files"
            },
            "setBaseUrl": {
              "type": "function"
            },
            "Handlers": {
              "type": "object",
              "members": {
                "Del": {
                  "type": "function"
                },
                "GetList": {
                  "type": "function"
                },
                "Get": {
                  "type": "function"
                },
                "PutInsert": {
                  "type": "function"
                },
                "PutUpdate": {
                  "type": "function"
                }
              }
            },
            "setHeadersForGet": {
              "type": "function"
            },
            "publish": {
              "type": "function"
            },
            "unpublish": {
              "type": "function"
            },
            "mount": {
              "type": "function"
            },
            "unmount": {
              "type": "function"
            },
            "now": {
              "type": "function"
            }
          }
        },
        "Collection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "domain": {
                  "type": "null",
                  "value": null
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "allowsFile": {
                  "type": "function"
                },
                "filters": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 67
                },
                "emit": {
                  "ref": 69
                },
                "addListener": {
                  "ref": 71
                },
                "on": {
                  "ref": 71
                },
                "once": {
                  "ref": 73
                },
                "removeListener": {
                  "ref": 75
                },
                "removeAllListeners": {
                  "ref": 77
                },
                "listeners": {
                  "ref": 79
                }
              }
            }
          }
        },
        "FileWorker": {
          "type": "object",
          "members": {
            "observe": {
              "type": "function"
            }
          }
        }
      }
    },
    "_Utility": {
      "type": "object",
      "members": {
        "defaultZero": {
          "type": "function"
        }
      }
    }
  },
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "mongo-livedata": {},
  "raix:eventemitter": {
    "EventEmitter": {
      "type": "function",
      "members": {
        "listenerCount": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "setMaxListeners": {
              "type": "function"
            },
            "emit": {
              "type": "function"
            },
            "addListener": {
              "type": "function",
              "refID": 8
            },
            "on": {
              "ref": 8
            },
            "once": {
              "type": "function"
            },
            "removeListener": {
              "type": "function"
            },
            "removeAllListeners": {
              "type": "function"
            },
            "listeners": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:storage-adapter": {},
  "cfs:gridfs": {},
  "matb33:collection-hooks": {
    "CollectionHooks": {
      "type": "object",
      "members": {
        "defaults": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "directEnv": {
          "type": "object",
          "members": {
            "slot": {
              "type": "constant",
              "value": 4
            },
            "get": {
              "type": "function"
            },
            "getOrNullIfOutsideFiber": {
              "type": "function"
            },
            "withValue": {
              "type": "function"
            }
          }
        },
        "directOp": {
          "type": "function"
        },
        "hookedOp": {
          "type": "function"
        },
        "getUserId": {
          "type": "function"
        },
        "extendCollectionInstance": {
          "type": "function"
        },
        "defineAdvice": {
          "type": "function"
        },
        "getAdvice": {
          "type": "function"
        },
        "initOptions": {
          "type": "function"
        },
        "extendOptions": {
          "type": "function"
        },
        "getDocs": {
          "type": "function"
        },
        "getFields": {
          "type": "function"
        },
        "reassignPrototype": {
          "type": "function"
        },
        "wrapCollection": {
          "type": "function"
        },
        "modify": {
          "type": "function"
        },
        "isWithinPublish": {
          "type": "function"
        }
      }
    }
  },
  "dburles:collection-helpers": {},
  "aldeed:simple-schema": {
    "SimpleSchema": {
      "type": "function",
      "members": {
        "extendOptions": {
          "type": "function"
        },
        "RegEx": {
          "type": "object",
          "members": {
            "Email": {
              "type": "regexp"
            },
            "Domain": {
              "type": "regexp"
            },
            "WeakDomain": {
              "type": "regexp"
            },
            "IP": {
              "type": "regexp"
            },
            "IPv4": {
              "type": "regexp"
            },
            "IPv6": {
              "type": "regexp"
            },
            "Url": {
              "type": "regexp"
            },
            "Id": {
              "type": "regexp"
            },
            "ZipCode": {
              "type": "regexp"
            }
          }
        },
        "addValidator": {
          "type": "function"
        },
        "messages": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "condition": {
              "type": "function"
            },
            "namedContext": {
              "type": "function"
            },
            "validator": {
              "type": "function",
              "refID": 22
            },
            "addValidator": {
              "ref": 22
            },
            "pick": {
              "type": "function"
            },
            "clean": {
              "type": "function"
            },
            "schema": {
              "type": "function"
            },
            "getDefinition": {
              "type": "function"
            },
            "keyIsInBlackBox": {
              "type": "function"
            },
            "labels": {
              "type": "function"
            },
            "label": {
              "type": "function"
            },
            "messages": {
              "type": "function"
            },
            "messageForError": {
              "type": "function"
            },
            "allowsKey": {
              "type": "function"
            },
            "newContext": {
              "type": "function"
            },
            "objectKeys": {
              "type": "function"
            }
          }
        }
      }
    },
    "MongoObject": {
      "type": "function",
      "members": {
        "expandKey": {
          "type": "function"
        }
      }
    }
  },
  "aldeed:collection2": {},
  "url": {
    "URL": {
      "type": "object"
    }
  },
  "http": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "methodsMaxDataLength": {
          "type": "constant",
          "value": 5242880
        },
        "defaultAuth": {
          "type": "function"
        },
        "methods": {
          "type": "function"
        },
        "publishFormats": {
          "type": "function"
        },
        "publish": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    },
    "HTTPInternals": {
      "type": "object",
      "members": {
        "NpmModules": {
          "type": "object",
          "members": {
            "request": {
              "type": "object",
              "members": {
                "version": {
                  "type": "constant",
                  "value": "2.53.0"
                },
                "module": {
                  "type": "function",
                  "members": {
                    "get": {
                      "type": "function"
                    },
                    "head": {
                      "type": "function"
                    },
                    "post": {
                      "type": "function"
                    },
                    "put": {
                      "type": "function"
                    },
                    "patch": {
                      "type": "function"
                    },
                    "del": {
                      "type": "function"
                    },
                    "jar": {
                      "type": "function"
                    },
                    "cookie": {
                      "type": "function"
                    },
                    "defaults": {
                      "type": "function"
                    },
                    "forever": {
                      "type": "function"
                    },
                    "Request": {
                      "type": "function",
                      "members": {
                        "super_": {
                          "type": "function",
                          "refID": 25,
                          "members": {
                            "super_": {
                              "type": "function",
                              "members": {
                                "listenerCount": {
                                  "type": "function"
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "setMaxListeners": {
                                      "type": "function",
                                      "refID": 30
                                    },
                                    "emit": {
                                      "type": "function",
                                      "refID": 32
                                    },
                                    "addListener": {
                                      "type": "function",
                                      "refID": 34
                                    },
                                    "on": {
                                      "ref": 34
                                    },
                                    "once": {
                                      "type": "function",
                                      "refID": 36
                                    },
                                    "removeListener": {
                                      "type": "function",
                                      "refID": 38
                                    },
                                    "removeAllListeners": {
                                      "type": "function",
                                      "refID": 40
                                    },
                                    "listeners": {
                                      "type": "function",
                                      "refID": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Readable": {
                              "type": "function",
                              "refID": 44,
                              "members": {
                                "ReadableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 25
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 48
                                    },
                                    "unshift": {
                                      "type": "function",
                                      "refID": 50
                                    },
                                    "setEncoding": {
                                      "type": "function",
                                      "refID": 52
                                    },
                                    "read": {
                                      "type": "function",
                                      "refID": 54
                                    },
                                    "pipe": {
                                      "type": "function",
                                      "refID": 56
                                    },
                                    "unpipe": {
                                      "type": "function",
                                      "refID": 58
                                    },
                                    "on": {
                                      "type": "function",
                                      "refID": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "type": "function",
                                      "refID": 62
                                    },
                                    "pause": {
                                      "type": "function",
                                      "refID": 64
                                    },
                                    "wrap": {
                                      "type": "function",
                                      "refID": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Writable": {
                              "type": "function",
                              "members": {
                                "WritableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 25
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "pipe": {
                                      "type": "function"
                                    },
                                    "write": {
                                      "type": "function",
                                      "refID": 74
                                    },
                                    "end": {
                                      "type": "function",
                                      "refID": 76
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "addListener": {
                                      "ref": 34
                                    },
                                    "on": {
                                      "ref": 34
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Duplex": {
                              "type": "function",
                              "refID": 78,
                              "members": {
                                "super_": {
                                  "ref": 44
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "push": {
                                      "ref": 48
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Transform": {
                              "type": "function",
                              "refID": 80,
                              "members": {
                                "super_": {
                                  "ref": 78
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 82
                                    },
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "PassThrough": {
                              "type": "function",
                              "members": {
                                "super_": {
                                  "ref": 80
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "ref": 82
                                    },
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Stream": {
                              "ref": 25
                            },
                            "prototype": {
                              "type": "object",
                              "members": {
                                "pipe": {
                                  "type": "function"
                                },
                                "setMaxListeners": {
                                  "ref": 30
                                },
                                "emit": {
                                  "ref": 32
                                },
                                "addListener": {
                                  "ref": 34
                                },
                                "on": {
                                  "ref": 34
                                },
                                "once": {
                                  "ref": 36
                                },
                                "removeListener": {
                                  "ref": 38
                                },
                                "removeAllListeners": {
                                  "ref": 40
                                },
                                "listeners": {
                                  "ref": 42
                                }
                              }
                            }
                          }
                        },
                        "debug": {
                          "type": "undefined"
                        },
                        "defaultProxyHeaderWhiteList": {
                          "type": "array"
                        },
                        "defaultProxyHeaderExclusiveList": {
                          "type": "array"
                        },
                        "prototype": {
                          "type": "object",
                          "members": {
                            "setupTunnel": {
                              "type": "function"
                            },
                            "init": {
                              "type": "function"
                            },
                            "getNewAgent": {
                              "type": "function"
                            },
                            "start": {
                              "type": "function"
                            },
                            "onRequestError": {
                              "type": "function"
                            },
                            "onRequestResponse": {
                              "type": "function"
                            },
                            "abort": {
                              "type": "function"
                            },
                            "pipeDest": {
                              "type": "function"
                            },
                            "qs": {
                              "type": "function"
                            },
                            "form": {
                              "type": "function"
                            },
                            "multipart": {
                              "type": "function"
                            },
                            "json": {
                              "type": "function"
                            },
                            "getHeader": {
                              "type": "function"
                            },
                            "auth": {
                              "type": "function"
                            },
                            "aws": {
                              "type": "function"
                            },
                            "httpSignature": {
                              "type": "function"
                            },
                            "hawk": {
                              "type": "function"
                            },
                            "oauth": {
                              "type": "function"
                            },
                            "jar": {
                              "type": "function"
                            },
                            "pipe": {
                              "type": "function"
                            },
                            "write": {
                              "type": "function"
                            },
                            "end": {
                              "type": "function"
                            },
                            "pause": {
                              "type": "function"
                            },
                            "resume": {
                              "type": "function"
                            },
                            "destroy": {
                              "type": "function"
                            },
                            "toJSON": {
                              "type": "function"
                            },
                            "setMaxListeners": {
                              "ref": 30
                            },
                            "emit": {
                              "ref": 32
                            },
                            "addListener": {
                              "ref": 34
                            },
                            "on": {
                              "ref": 34
                            },
                            "once": {
                              "ref": 36
                            },
                            "removeListener": {
                              "ref": 38
                            },
                            "removeAllListeners": {
                              "ref": 40
                            },
                            "listeners": {
                              "ref": 42
                            }
                          }
                        }
                      }
                    },
                    "initParams": {
                      "type": "function"
                    },
                    "debug": {
                      "type": "undefined"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "velocity:chokidar": {
    "chokidar": {
      "type": "object",
      "members": {
        "FSWatcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "add": {
                  "type": "function"
                },
                "unwatch": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "type": "function"
                },
                "emit": {
                  "type": "function"
                },
                "addListener": {
                  "type": "function",
                  "refID": 13
                },
                "on": {
                  "ref": 13
                },
                "once": {
                  "type": "function"
                },
                "removeListener": {
                  "type": "function"
                },
                "removeAllListeners": {
                  "type": "function"
                },
                "listeners": {
                  "type": "function"
                }
              }
            }
          }
        },
        "watch": {
          "type": "function"
        }
      }
    }
  },
  "velocity:meteor-internals": {
    "VelocityMeteorInternals": {
      "type": "object",
      "members": {
        "parseStack": {
          "type": "object",
          "members": {
            "markBottom": {
              "type": "function"
            }
          }
        },
        "buildmessage": {
          "type": "object",
          "members": {
            "markBoundary": {
              "type": "function"
            }
          }
        },
        "files": {
          "type": "object",
          "members": {
            "cwd": {
              "type": "function"
            },
            "findAppDir": {
              "type": "function"
            },
            "findPackageDir": {
              "type": "function"
            },
            "statOrNull": {
              "type": "function"
            },
            "runJavaScript": {
              "type": "function"
            },
            "FancySyntaxError": {
              "type": "function"
            },
            "writeFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "writeFile"
                }
              }
            },
            "appendFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "appendFile"
                }
              }
            },
            "readFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readFile"
                }
              }
            },
            "stat": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "stat"
                }
              }
            },
            "lstat": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "lstat"
                }
              }
            },
            "exists": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "exists"
                }
              }
            },
            "rename": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "rename"
                }
              }
            },
            "realpath": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "realpath"
                }
              }
            },
            "readdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readdir"
                }
              }
            },
            "rmdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "rmdir"
                }
              }
            },
            "mkdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "mkdir"
                }
              }
            },
            "unlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "unlink"
                }
              }
            },
            "chmod": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "chmod"
                }
              }
            },
            "open": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "open"
                }
              }
            },
            "read": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "read"
                }
              }
            },
            "write": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "write"
                }
              }
            },
            "close": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "close"
                }
              }
            },
            "symlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "symlink"
                }
              }
            },
            "readlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readlink"
                }
              }
            },
            "createReadStream": {
              "type": "function"
            },
            "createWriteStream": {
              "type": "function"
            },
            "watchFile": {
              "type": "function"
            },
            "unwatchFile": {
              "type": "function"
            },
            "pathJoin": {
              "type": "function"
            },
            "pathNormalize": {
              "type": "function"
            },
            "pathRelative": {
              "type": "function"
            },
            "pathResolve": {
              "type": "function"
            },
            "pathDirname": {
              "type": "function"
            },
            "pathBasename": {
              "type": "function"
            },
            "pathExtname": {
              "type": "function"
            },
            "pathSep": {
              "type": "constant",
              "value": "/"
            },
            "pathDelimiter": {
              "type": "constant",
              "value": ":"
            },
            "pathOsDelimiter": {
              "type": "constant",
              "value": ":"
            },
            "convertToStandardPath": {
              "type": "function"
            },
            "convertToOSPath": {
              "type": "function"
            },
            "convertToWindowsPath": {
              "type": "function"
            },
            "convertToPosixPath": {
              "type": "function"
            },
            "convertToStandardLineEndings": {
              "type": "function"
            },
            "convertToOSLineEndings": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "velocity:source-map-support": {
    "SourceMapSupport": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        }
      }
    }
  },
  "coffeescript": {},
  "practicalmeteor:loglevel": {
    "loglevel": {
      "type": "object",
      "members": {
        "createLogger": {
          "type": "function"
        },
        "createPackageLogger": {
          "type": "function"
        },
        "createAppLogger": {
          "type": "function"
        }
      }
    },
    "ObjectLogger": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "enter": {
              "type": "function"
            },
            "return": {
              "type": "function"
            },
            "bindMethod": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "sanjo:long-running-child-process": {
    "LongRunningChildProcess": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "taskName": {
              "type": "null",
              "value": null
            },
            "child": {
              "type": "null",
              "value": null
            },
            "pid": {
              "type": "null",
              "value": null
            },
            "getTaskName": {
              "type": "function"
            },
            "getChild": {
              "type": "function"
            },
            "getPid": {
              "type": "function"
            },
            "isDead": {
              "type": "function"
            },
            "isRunning": {
              "type": "function"
            },
            "readPid": {
              "type": "function"
            },
            "spawn": {
              "type": "function"
            },
            "kill": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "sanjo:meteor-version": {
    "MeteorVersion": {
      "type": "object",
      "members": {
        "getSemanticVersion": {
          "type": "function"
        }
      }
    }
  },
  "package-version-parser": {
    "PackageVersion": {
      "type": "function",
      "members": {
        "parse": {
          "type": "function"
        },
        "versionMagnitude": {
          "type": "function"
        },
        "lessThan": {
          "type": "function"
        },
        "majorVersion": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "getValidServerVersion": {
          "type": "function"
        },
        "VersionConstraint": {
          "type": "function"
        },
        "parseVersionConstraint": {
          "type": "function"
        },
        "PackageConstraint": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parsePackageConstraint": {
          "type": "function"
        },
        "validatePackageName": {
          "type": "function"
        },
        "invalidFirstFormatConstraint": {
          "type": "function"
        },
        "removeBuildID": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:meteor-files-helpers": {
    "MeteorFilesHelpers": {
      "type": "object",
      "members": {
        "getAppPath": {
          "type": "function"
        },
        "getMeteorToolPath": {
          "type": "function"
        },
        "getMeteorInstallationPath": {
          "type": "function"
        },
        "getNodeModulePath": {
          "type": "function"
        },
        "getPackageVersions": {
          "type": "function"
        },
        "getPackageVersion": {
          "type": "function"
        },
        "isPackageInstalled": {
          "type": "function"
        }
      }
    }
  },
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "reusableMirrors": {
          "type": "array"
        },
        "startup": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "getPackagesPath": {
          "type": "function"
        },
        "getPackagePath": {
          "type": "function"
        },
        "postProcessors": {
          "type": "array"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "unregisterTestingFramework": {
          "type": "function"
        },
        "onTest": {
          "type": "function"
        },
        "setOption": {
          "type": "function"
        },
        "setOptions": {
          "type": "function"
        },
        "getOption": {
          "type": "function"
        },
        "mirrorMeteorReleaseName": {
          "type": "constant",
          "value": "velocity:METEOR"
        },
        "mirrorMeteorVersion": {
          "type": "constant",
          "value": "1.1.0.3_2"
        },
        "mirrorMeteorRelease": {
          "type": "constant",
          "value": "velocity:METEOR@1.1.0.3_2"
        },
        "mirrorMeteorToolReleaseName": {
          "type": "constant",
          "value": "velocity:meteor-tool"
        },
        "mirrorMeteorToolVersion": {
          "type": "constant",
          "value": "1.1.4_2"
        },
        "mirrorMeteorToolRelease": {
          "type": "constant",
          "value": "velocity:meteor-tool@1.1.4_2"
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "helpers": {
                  "type": "function",
                  "refID": 99
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 101
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 103
                },
                "insert": {
                  "type": "function",
                  "refID": 105
                },
                "update": {
                  "type": "function",
                  "refID": 107
                },
                "find": {
                  "type": "function",
                  "refID": 109
                },
                "findOne": {
                  "type": "function",
                  "refID": 111
                },
                "remove": {
                  "type": "function",
                  "refID": 113
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 117
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 119
                },
                "allow": {
                  "type": "function",
                  "refID": 121
                },
                "deny": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "helpers": {
          "ref": 99
        },
        "attachSchema": {
          "ref": 101
        },
        "simpleSchema": {
          "ref": 103
        },
        "insert": {
          "ref": 105
        },
        "update": {
          "ref": 107
        },
        "find": {
          "ref": 109
        },
        "findOne": {
          "ref": 111
        },
        "remove": {
          "ref": 113
        },
        "rawCollection": {
          "ref": 117
        },
        "rawDatabase": {
          "ref": 119
        },
        "allow": {
          "ref": 121
        },
        "deny": {
          "ref": 123
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "helpers": {
                  "type": "function",
                  "refID": 99
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 101
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 103
                },
                "insert": {
                  "type": "function",
                  "refID": 105
                },
                "update": {
                  "type": "function",
                  "refID": 107
                },
                "find": {
                  "type": "function",
                  "refID": 109
                },
                "findOne": {
                  "type": "function",
                  "refID": 111
                },
                "remove": {
                  "type": "function",
                  "refID": 113
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 117
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 119
                },
                "allow": {
                  "type": "function",
                  "refID": 121
                },
                "deny": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "helpers": {
          "ref": 99
        },
        "attachSchema": {
          "ref": 101
        },
        "simpleSchema": {
          "ref": 103
        },
        "insert": {
          "ref": 105
        },
        "update": {
          "ref": 107
        },
        "find": {
          "ref": 109
        },
        "findOne": {
          "ref": 111
        },
        "remove": {
          "ref": 113
        },
        "rawCollection": {
          "ref": 117
        },
        "rawDatabase": {
          "ref": 119
        },
        "allow": {
          "ref": 121
        },
        "deny": {
          "ref": 123
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "helpers": {
                  "type": "function",
                  "refID": 99
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 101
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 103
                },
                "insert": {
                  "type": "function",
                  "refID": 105
                },
                "update": {
                  "type": "function",
                  "refID": 107
                },
                "find": {
                  "type": "function",
                  "refID": 109
                },
                "findOne": {
                  "type": "function",
                  "refID": 111
                },
                "remove": {
                  "type": "function",
                  "refID": 113
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 117
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 119
                },
                "allow": {
                  "type": "function",
                  "refID": 121
                },
                "deny": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "helpers": {
          "ref": 99
        },
        "attachSchema": {
          "ref": 101
        },
        "simpleSchema": {
          "ref": 103
        },
        "insert": {
          "ref": 105
        },
        "update": {
          "ref": 107
        },
        "find": {
          "ref": 109
        },
        "findOne": {
          "ref": 111
        },
        "remove": {
          "ref": 113
        },
        "rawCollection": {
          "ref": 117
        },
        "rawDatabase": {
          "ref": 119
        },
        "allow": {
          "ref": 121
        },
        "deny": {
          "ref": 123
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "helpers": {
                  "type": "function",
                  "refID": 99
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 101
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 103
                },
                "insert": {
                  "type": "function",
                  "refID": 105
                },
                "update": {
                  "type": "function",
                  "refID": 107
                },
                "find": {
                  "type": "function",
                  "refID": 109
                },
                "findOne": {
                  "type": "function",
                  "refID": 111
                },
                "remove": {
                  "type": "function",
                  "refID": 113
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 117
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 119
                },
                "allow": {
                  "type": "function",
                  "refID": 121
                },
                "deny": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "helpers": {
          "ref": 99
        },
        "attachSchema": {
          "ref": 101
        },
        "simpleSchema": {
          "ref": 103
        },
        "insert": {
          "ref": 105
        },
        "update": {
          "ref": 107
        },
        "find": {
          "ref": 109
        },
        "findOne": {
          "ref": 111
        },
        "remove": {
          "ref": 113
        },
        "rawCollection": {
          "ref": 117
        },
        "rawDatabase": {
          "ref": 119
        },
        "allow": {
          "ref": 121
        },
        "deny": {
          "ref": 123
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "helpers": {
                  "type": "function",
                  "refID": 99
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 101
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 103
                },
                "insert": {
                  "type": "function",
                  "refID": 105
                },
                "update": {
                  "type": "function",
                  "refID": 107
                },
                "find": {
                  "type": "function",
                  "refID": 109
                },
                "findOne": {
                  "type": "function",
                  "refID": 111
                },
                "remove": {
                  "type": "function",
                  "refID": 113
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 117
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 119
                },
                "allow": {
                  "type": "function",
                  "refID": 121
                },
                "deny": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "helpers": {
          "ref": 99
        },
        "attachSchema": {
          "ref": 101
        },
        "simpleSchema": {
          "ref": 103
        },
        "insert": {
          "ref": 105
        },
        "update": {
          "ref": 107
        },
        "find": {
          "ref": 109
        },
        "findOne": {
          "ref": 111
        },
        "remove": {
          "ref": 113
        },
        "rawCollection": {
          "ref": 117
        },
        "rawDatabase": {
          "ref": 119
        },
        "allow": {
          "ref": 121
        },
        "deny": {
          "ref": 123
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "helpers": {
                  "type": "function",
                  "refID": 99
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 101
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 103
                },
                "insert": {
                  "type": "function",
                  "refID": 105
                },
                "update": {
                  "type": "function",
                  "refID": 107
                },
                "find": {
                  "type": "function",
                  "refID": 109
                },
                "findOne": {
                  "type": "function",
                  "refID": 111
                },
                "remove": {
                  "type": "function",
                  "refID": 113
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 117
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 119
                },
                "allow": {
                  "type": "function",
                  "refID": 121
                },
                "deny": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "helpers": {
          "ref": 99
        },
        "attachSchema": {
          "ref": 101
        },
        "simpleSchema": {
          "ref": 103
        },
        "insert": {
          "ref": 105
        },
        "update": {
          "ref": 107
        },
        "find": {
          "ref": 109
        },
        "findOne": {
          "ref": 111
        },
        "remove": {
          "ref": 113
        },
        "rawCollection": {
          "ref": 117
        },
        "rawDatabase": {
          "ref": 119
        },
        "allow": {
          "ref": 121
        },
        "deny": {
          "ref": 123
        }
      }
    },
    "VelocityOptions": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "helpers": {
                  "type": "function",
                  "refID": 99
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 101
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 103
                },
                "insert": {
                  "type": "function",
                  "refID": 105
                },
                "update": {
                  "type": "function",
                  "refID": 107
                },
                "find": {
                  "type": "function",
                  "refID": 109
                },
                "findOne": {
                  "type": "function",
                  "refID": 111
                },
                "remove": {
                  "type": "function",
                  "refID": 113
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 117
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 119
                },
                "allow": {
                  "type": "function",
                  "refID": 121
                },
                "deny": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "helpers": {
          "ref": 99
        },
        "attachSchema": {
          "ref": 101
        },
        "simpleSchema": {
          "ref": 103
        },
        "insert": {
          "ref": 105
        },
        "update": {
          "ref": 107
        },
        "find": {
          "ref": 109
        },
        "findOne": {
          "ref": 111
        },
        "remove": {
          "ref": 113
        },
        "rawCollection": {
          "ref": 117
        },
        "rawDatabase": {
          "ref": 119
        },
        "allow": {
          "ref": 121
        },
        "deny": {
          "ref": 123
        }
      }
    }
  },
  "velocity:shim": {},
  "simple:json-routes": {
    "JsonRoutes": {
      "type": "object",
      "members": {
        "middleWare": {
          "type": "function",
          "refID": 1,
          "members": {
            "use": {
              "type": "function"
            },
            "handle": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "setMaxListeners": {
              "type": "function"
            },
            "emit": {
              "type": "function"
            },
            "addListener": {
              "type": "function",
              "refID": 12
            },
            "on": {
              "ref": 12
            },
            "once": {
              "type": "function"
            },
            "removeListener": {
              "type": "function"
            },
            "removeAllListeners": {
              "type": "function"
            },
            "listeners": {
              "type": "function"
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "Middleware": {
          "ref": 1
        },
        "routes": {
          "type": "array"
        },
        "add": {
          "type": "function"
        },
        "setResponseHeaders": {
          "type": "function"
        },
        "sendResult": {
          "type": "function"
        },
        "sendError": {
          "type": "function"
        }
      }
    }
  },
  "xolvio:cucumber": {},
  "velocity:console-reporter": {
    "ConsoleReporter": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "reportSummary": {
              "type": "function"
            },
            "reportPassed": {
              "type": "function"
            },
            "reportFailed": {
              "type": "function"
            },
            "reportOneFailed": {
              "type": "function"
            },
            "totalTime": {
              "type": "function"
            },
            "formatTime": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "velocity:meteor-stubs": {
    "MeteorStubs": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        },
        "uninstall": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:karma": {
    "Karma": {
      "type": "object",
      "members": {
        "start": {
          "type": "function"
        },
        "setConfig": {
          "type": "function"
        },
        "getConfigPath": {
          "type": "function"
        }
      }
    },
    "KarmaInternals": {
      "type": "object",
      "members": {
        "karmaChilds": {
          "type": "object",
          "members": {
            "jasmine-client-unit": {
              "type": "object",
              "members": {
                "taskName": {
                  "type": "constant",
                  "value": "jasmine-client-unit"
                },
                "appPath": {
                  "type": "constant",
                  "value": "/Users/georgemcknight/Desktop/Mastering Meteor JS/Movies/10_Deploying-Your-Application/10.1-Deploy_Locally/quietearth"
                },
                "pid": {
                  "type": "constant",
                  "value": 8257
                },
                "fout": {
                  "type": "constant",
                  "value": 46
                },
                "child": {
                  "type": "object",
                  "members": {
                    "domain": {
                      "type": "null",
                      "value": null
                    },
                    "signalCode": {
                      "type": "null",
                      "value": null
                    },
                    "exitCode": {
                      "type": "null",
                      "value": null
                    },
                    "pid": {
                      "type": "constant",
                      "value": 8257
                    },
                    "stdin": {
                      "type": "null",
                      "value": null
                    },
                    "stdout": {
                      "type": "null",
                      "value": null
                    },
                    "stderr": {
                      "type": "null",
                      "value": null
                    },
                    "stdio": {
                      "type": "array"
                    },
                    "spawn": {
                      "type": "function"
                    },
                    "kill": {
                      "type": "function"
                    },
                    "ref": {
                      "type": "function"
                    },
                    "unref": {
                      "type": "function"
                    },
                    "setMaxListeners": {
                      "type": "function"
                    },
                    "emit": {
                      "type": "function"
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 17
                    },
                    "on": {
                      "ref": 17
                    },
                    "once": {
                      "type": "function"
                    },
                    "removeListener": {
                      "type": "function"
                    },
                    "removeAllListeners": {
                      "type": "function"
                    },
                    "listeners": {
                      "type": "function"
                    }
                  }
                },
                "getTaskName": {
                  "type": "function"
                },
                "getChild": {
                  "type": "function"
                },
                "getPid": {
                  "type": "function"
                },
                "isDead": {
                  "type": "function"
                },
                "isRunning": {
                  "type": "function"
                },
                "readPid": {
                  "type": "function"
                },
                "spawn": {
                  "type": "function"
                },
                "kill": {
                  "type": "function"
                }
              }
            }
          }
        },
        "getKarmaChild": {
          "type": "function"
        },
        "setKarmaChild": {
          "type": "function"
        },
        "startKarmaServer": {
          "type": "function"
        },
        "writeKarmaConfig": {
          "type": "function"
        },
        "generateKarmaConfig": {
          "type": "function"
        },
        "readKarmaConfig": {
          "type": "function"
        },
        "getConfigPath": {
          "type": "function"
        },
        "getKarmaPath": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {
    "Jasmine": {
      "type": "object",
      "members": {
        "onTest": {
          "type": "function"
        },
        "setKarmaConfig": {
          "type": "function"
        }
      }
    }
  },
  "session": {},
  "cfs:data-man": {
    "DataMan": {
      "type": "function",
      "members": {
        "Buffer": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "DataURI": {
          "type": "function"
        },
        "FilePath": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "URL": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReadStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "getBuffer": {
              "type": "function"
            },
            "saveToFile": {
              "type": "function"
            },
            "getDataUri": {
              "type": "function"
            },
            "createReadStream": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "type": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:file": {},
  "cfs:tempstore": {},
  "cfs:http-methods": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "methodsMaxDataLength": {
          "type": "constant",
          "value": 5242880
        },
        "defaultAuth": {
          "type": "function"
        },
        "methods": {
          "type": "function"
        },
        "publishFormats": {
          "type": "function"
        },
        "publish": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    },
    "_methodHTTP": {
      "type": "object",
      "members": {
        "methodHandlers": {
          "type": "object",
          "members": {
            "/cfs/servertime/": {
              "type": "object",
              "members": {
                "auth": {
                  "type": "function",
                  "refID": 3
                },
                "POST": {
                  "type": "undefined"
                },
                "PUT": {
                  "type": "undefined"
                },
                "GET": {
                  "type": "function",
                  "refID": 5
                },
                "DELETE": {
                  "type": "undefined"
                },
                "HEAD": {
                  "ref": 5
                },
                "OPTIONS": {
                  "type": "function",
                  "refID": 7
                }
              }
            },
            "/cfs/files/:value/:value/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "type": "function",
                  "refID": 10
                },
                "POST": {
                  "type": "function",
                  "refID": 12
                },
                "PUT": {
                  "type": "function",
                  "refID": 14
                },
                "GET": {
                  "type": "function",
                  "refID": 16
                },
                "DELETE": {
                  "type": "function",
                  "refID": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            },
            "/cfs/files/:value/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "ref": 10
                },
                "POST": {
                  "ref": 12
                },
                "PUT": {
                  "ref": 14
                },
                "GET": {
                  "ref": 16
                },
                "DELETE": {
                  "ref": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            },
            "/cfs/files/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "ref": 10
                },
                "POST": {
                  "ref": 12
                },
                "PUT": {
                  "ref": 14
                },
                "GET": {
                  "ref": 16
                },
                "DELETE": {
                  "ref": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            }
          }
        },
        "methodTree": {
          "type": "object",
          "members": {
            "cfs": {
              "type": "object",
              "members": {
                "servertime": {
                  "type": "object",
                  "members": {
                    ":ref": {
                      "type": "object",
                      "members": {
                        "name": {
                          "type": "constant",
                          "value": "/cfs/servertime/"
                        },
                        "params": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "files": {
                  "type": "object",
                  "members": {
                    ":value": {
                      "type": "object",
                      "members": {
                        ":value": {
                          "type": "object",
                          "members": {
                            ":value": {
                              "type": "object",
                              "members": {
                                ":ref": {
                                  "type": "object",
                                  "members": {
                                    "name": {
                                      "type": "constant",
                                      "value": "/cfs/files/:value/:value/:value/"
                                    },
                                    "params": {
                                      "type": "array"
                                    }
                                  }
                                }
                              }
                            },
                            ":ref": {
                              "type": "object",
                              "members": {
                                "name": {
                                  "type": "constant",
                                  "value": "/cfs/files/:value/:value/"
                                },
                                "params": {
                                  "type": "array"
                                }
                              }
                            }
                          }
                        },
                        ":ref": {
                          "type": "object",
                          "members": {
                            "name": {
                              "type": "constant",
                              "value": "/cfs/files/:value/"
                            },
                            "params": {
                              "type": "array"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "nameFollowsConventions": {
          "type": "function"
        },
        "getNameList": {
          "type": "function"
        },
        "createObject": {
          "type": "function"
        },
        "addToMethodTree": {
          "type": "function"
        },
        "getMethod": {
          "type": "function"
        },
        "getUserId": {
          "ref": 3
        },
        "defaultOptionsHandler": {
          "ref": 7
        }
      }
    }
  },
  "cfs:http-publish": {
    "_publishHTTP": {
      "type": "object",
      "members": {
        "currentlyPublished": {
          "type": "array"
        },
        "getPublishScope": {
          "type": "function"
        },
        "formatHandlers": {
          "type": "object",
          "members": {
            "json": {
              "type": "function"
            },
            "fileRecordFormat": {
              "type": "function"
            }
          }
        },
        "formatResult": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "getMethodHandler": {
          "type": "function"
        },
        "unpublishList": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    }
  },
  "cfs:access-point": {},
  "cfs:reactive-property": {
    "ReactiveProperty": {
      "type": "function"
    }
  },
  "cfs:reactive-list": {
    "ReactiveList": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "length": {
              "type": "function"
            },
            "reset": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "getLastItem": {
              "type": "function"
            },
            "getFirstItem": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "forEachReverse": {
              "type": "function"
            },
            "fetch": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:power-queue": {
    "PowerQueue": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "processingList": {
              "type": "function"
            },
            "isHalted": {
              "type": "function"
            },
            "length": {
              "type": "function"
            },
            "progress": {
              "type": "function"
            },
            "usage": {
              "type": "function"
            },
            "reset": {
              "type": "function"
            },
            "add": {
              "type": "function"
            },
            "updateThrottleUp": {
              "type": "function"
            },
            "updateThrottleDown": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "runTaskDone": {
              "type": "function"
            },
            "runTask": {
              "type": "function"
            },
            "queueTaskHandler": {
              "type": "function"
            },
            "taskHandler": {
              "type": "function"
            },
            "errorHandler": {
              "type": "function"
            },
            "pause": {
              "type": "function"
            },
            "resume": {
              "type": "function"
            },
            "run": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            },
            "cancel": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:upload-http": {},
  "cfs:collection": {},
  "cfs:collection-filters": {},
  "cfs:worker": {},
  "service-configuration": {
    "ServiceConfiguration": {
      "type": "object",
      "members": {
        "configurations": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "hookOptions": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "upsert": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                },
                "all": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                }
              }
            },
            "direct": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "upsert": {
              "type": "function"
            },
            "constructor": {
              "type": "function",
              "refID": 66,
              "members": {
                "Cursor": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "rewind": {
                          "type": "function"
                        },
                        "forEach": {
                          "type": "function"
                        },
                        "getTransform": {
                          "type": "function"
                        },
                        "map": {
                          "type": "function"
                        },
                        "fetch": {
                          "type": "function"
                        },
                        "count": {
                          "type": "function"
                        },
                        "observe": {
                          "type": "function"
                        },
                        "observeChanges": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "ObjectID": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "toString": {
                          "type": "function"
                        },
                        "equals": {
                          "type": "function"
                        },
                        "clone": {
                          "type": "function"
                        },
                        "typeName": {
                          "type": "function"
                        },
                        "getTimestamp": {
                          "type": "function"
                        },
                        "toHexString": {
                          "type": "function",
                          "refID": 97
                        },
                        "toJSONValue": {
                          "ref": 97
                        },
                        "valueOf": {
                          "ref": 97
                        }
                      }
                    }
                  }
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 66
                    },
                    "helpers": {
                      "type": "function",
                      "refID": 100
                    },
                    "attachSchema": {
                      "type": "function",
                      "refID": 102
                    },
                    "simpleSchema": {
                      "type": "function",
                      "refID": 104
                    },
                    "insert": {
                      "type": "function",
                      "refID": 106
                    },
                    "update": {
                      "type": "function",
                      "refID": 108
                    },
                    "find": {
                      "type": "function",
                      "refID": 110
                    },
                    "findOne": {
                      "type": "function",
                      "refID": 112
                    },
                    "remove": {
                      "type": "function",
                      "refID": 114
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "rawCollection": {
                      "type": "function",
                      "refID": 118
                    },
                    "rawDatabase": {
                      "type": "function",
                      "refID": 120
                    },
                    "allow": {
                      "type": "function",
                      "refID": 122
                    },
                    "deny": {
                      "type": "function",
                      "refID": 124
                    }
                  }
                }
              }
            },
            "helpers": {
              "ref": 100
            },
            "attachSchema": {
              "ref": 102
            },
            "simpleSchema": {
              "ref": 104
            },
            "insert": {
              "ref": 106
            },
            "update": {
              "ref": 108
            },
            "find": {
              "ref": 110
            },
            "findOne": {
              "ref": 112
            },
            "remove": {
              "ref": 114
            },
            "rawCollection": {
              "ref": 118
            },
            "rawDatabase": {
              "ref": 120
            },
            "allow": {
              "ref": 122
            },
            "deny": {
              "ref": 124
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  }
}
var globalContext = (typeof global !== 'undefined') ? global : window
var originalContext = []

/*
originalContext = [
  {
    context: window,
    propertyName: 'Meteor',
    value: {}
  }
]
*/

function _saveOriginal(context, propertyName) {
  originalContext.push({
    context: context,
    propertyName: propertyName,
    value: context[propertyName]
  })
}

function _restoreOriginal(original) {
  original.context[original.propertyName] = original.value
}

function restoreOriginals() {
  originalContext.forEach(_restoreOriginal)
  originalContext = []
}

function loadMocks() {
  for (var packageName in packageMetadata) {
    for (var packageExportName in packageMetadata[packageName]) {
      _saveOriginal(globalContext, packageExportName)
      var packageExport = packageMetadata[packageName][packageExportName]
      globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
    }
  }
}

beforeEach(loadMocks)
afterEach(restoreOriginals)
