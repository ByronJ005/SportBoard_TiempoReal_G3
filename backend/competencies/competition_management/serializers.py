from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PlayerAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerAssignment
        fields = '__all__'

class CoachAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoachAssignment
        fields = '__all__'

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

class PlanningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planning
        fields = '__all__'

class SquadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Squad
        fields = '__all__'

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'

class RuleCompetenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RuleCompetition
        fields = '__all__'



class RuleDisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = RuleDiscipline
        fields = '__all__'

class CompetenceSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(required=False)
    rule_list = RuleCompetenceSerializer(many=True, required=False)
    rule_discipline_list = RuleDisciplineSerializer(many=True, required=False)
    competence_format = serializers.PrimaryKeyRelatedField(queryset=FormatCatalog.objects.all())

    class Meta:
        model = Competence
        fields = '__all__'
        
class DisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = '__all__'

class CompetenceEditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompetitionEdition
        fields = '__all__'

class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class LocalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Locality
        fields = '__all__'

class DisciplineCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisciplineCatalog
        fields = '__all__'

class CountryCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryCatalog
        fields = '__all__'

class CountryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryItem
        fields = '__all__'

class FormatCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormatCatalog
        fields = '__all__'

class FormatItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormatItem
        fields = '__all__'

class StageCompetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StageCompetition
        fields = '__all__'