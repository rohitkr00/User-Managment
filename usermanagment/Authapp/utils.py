import jwt
from rest_framework.response import Response

from usermanagment import settings


def generate_jwt(payload):
    return jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256'

                      )


def decode_token(token):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms='HS256')
        return payload
    except jwt.ExpiredSignatureError:
        return Response({
            "message": "Invalid Signature"
        })
    except jwt.InvalidTokenError:
        return Response({
            "message": "Invalid Token"
        })


